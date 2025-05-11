import { 
  users, 
  users as usersTable,
  userPlans as usersPlansTable,
  plans as plansTable,
  admins,
  plans,
  type User, 
  type InsertUser, 
  contactRequests, 
  type ContactRequest, 
  type InsertContactRequest 
} from "@shared/schema";
import { db } from "./db";
import { eq, sql } from "drizzle-orm";
import crypto from 'crypto';

// Storage interface with both User and ContactRequest CRUD operations
export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Contact request operations
  createContactRequest(request: InsertContactRequest & { createdAt: string }): Promise<ContactRequest>;
  getContactRequest(id: number): Promise<ContactRequest | undefined>;
  getAllContactRequests(): Promise<ContactRequest[]>;
  getAllPlans(): Promise<any[]>; // Added getAllPlans method signature
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async createUser(userData: {
    email: string;
    password: string;
    fullname: string;
    phone: string;
    createdAt: string;
  }): Promise<User> {
    const [user] = await db
      .insert(users)
      .values({
        id: crypto.randomUUID(),
        ...userData
      })
      .returning();
    return user;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);
    return user;
  }

  // Contact request operations
  async createContactRequest(request: InsertContactRequest & { createdAt: string }): Promise<ContactRequest> {
    const [contactRequest] = await db
      .insert(contactRequests)
      .values(request)
      .returning();
    return contactRequest;
  }

  async getContactRequest(id: number): Promise<ContactRequest | undefined> {
    const [contactRequest] = await db.select().from(contactRequests).where(eq(contactRequests.id, id));
    return contactRequest || undefined;
  }

  async getAllContactRequests(): Promise<ContactRequest[]> {
    return await db.select().from(contactRequests);
  }

  async getAdminByEmail(email: string) {
    const [admin] = await db.select().from(admins).where(eq(admins.email, email));
    return admin;
  }

  async createAdmin(data: { email: string, password: string }) {
    const [admin] = await db.insert(admins)
      .values({
        id: crypto.randomUUID(),
        ...data
      })
      .returning();
    return admin;
  }

  async hasAdmins() {
    const [count] = await db.select({ count: sql`count(*)` }).from(admins);
    return count.count > 0;
  }

  async createPlan(data: { name: string, price: string, description: string, created_by: string }) {
    try {
      const [plan] = await db.insert(plans)
        .values({
          id: crypto.randomUUID(),
          name: data.name,
          price: data.price,
          description: data.description,
          created_by: data.created_by,
          status: 'inativo'
        })
        .returning();
      return plan;
    } catch (error) {
      console.error('Error creating plan:', error);
      throw new Error('Failed to create plan: ' + (error as Error).message);
    }
  }

  async getAllPlans() {
    try {
      const results = await db.select().from(plans);
      return results || [];
    } catch (error) {
      console.error('Error fetching plans:', error);
      return [];
    }
  }

  async assignPlanToUser(userId: string, planId: string) {
    try {
      await db.insert(usersPlansTable).values({
        id: crypto.randomUUID(),
        user_id: userId,
        plan_id: planId,
        status: 'ativo',
        next_payment: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
      });
    } catch (error) {
      console.error('Error assigning plan:', error);
      throw new Error('Failed to assign plan to user');
    }
  }

  async getPlan(id: string) {
    const [plan] = await db.select().from(plans).where(eq(plans.id, id));
    return plan;
  }

  async deletePlan(id: string) {
    await db.delete(plans).where(eq(plans.id, id));
  }

  async updatePlan(id: string, data: { status?: string, name?: string, description?: string, price?: string }) {
    try {
      const [plan] = await db.update(plans)
        .set(data)
        .where(eq(plans.id, id))
        .returning();
      return plan;
    } catch (error) {
      console.error('Error updating plan:', error);
      throw new Error('Failed to update plan');
    }
  }

  async getPlans() {
    try {
      return await this.getAllPlans();
    } catch (error) {
      console.error('Error getting plans:', error);
      return [
        {
          id: '1',
          name: 'Cloud Server Basic',
          price: 99.90,
          status: 'active'
        },
        {
          id: '2', 
          name: 'Private Cloud Premium',
          price: 299.90,
          status: 'active'
        }
      ];
    }
  }

  async getAllUsers(): Promise<User[]> {
    const users = await db.select({
      id: usersTable.id,
      fullname: usersTable.fullname,
      email: usersTable.email,
      planId: plansTable.id,
      planName: plansTable.name,
      planPrice: plansTable.price,
      planStatus: usersPlansTable.status,
      planNextPayment: usersPlansTable.next_payment
    })
    .from(usersTable)
    .leftJoin(usersPlansTable, eq(usersTable.id, usersPlansTable.user_id))
    .leftJoin(plansTable, eq(usersPlansTable.plan_id, plansTable.id));

    // Group plans by user
    const usersWithPlans = users.reduce((acc, curr) => {
      const user = acc.find(u => u.id === curr.id);
      if (!user) {
        acc.push({
          id: curr.id,
          fullname: curr.fullname,
          email: curr.email,
          plans: curr.planId ? [{
            id: curr.planId,
            name: curr.planName,
            price: curr.planPrice,
            status: curr.planStatus,
            nextPayment: curr.planNextPayment
          }] : []
        });
      } else if (curr.planId) {
        user.plans.push({
          id: curr.planId,
          name: curr.planName,
          status: curr.planStatus,
          nextPayment: curr.planNextPayment
        });
      }
      return acc;
    }, []);

    return usersWithPlans;
  }
}

async function createUser(userData: {
  email: string;
  password: string;
  name: string;
  phone: string | null;
  createdAt: string;
}) {
  const result = await db.insert(users).values(userData).returning();
  return result[0];
}

export const storage = new DatabaseStorage();