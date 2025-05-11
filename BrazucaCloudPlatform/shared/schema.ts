
import { z } from "zod";
import { sql } from "drizzle-orm";
import { pgTable, text, timestamp, serial } from "drizzle-orm/pg-core";

// Schema Zod para validação
export const registerSchema = z.object({
  fullname: z.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone inválido"),
  password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
});

export type RegisterData = z.infer<typeof registerSchema>;

// Schema do banco de dados
export const users = pgTable('users', {
  id: text('id').primaryKey(),
  fullname: text('fullname').notNull(),
  email: text('email').notNull().unique(),
  phone: text('phone').notNull(),
  password: text('password').notNull(),
  created_at: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`),
});

export const contactRequests = pgTable("contact_requests", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  company: text("company").notNull(),
  service: text("service").notNull(),
  message: text("message").notNull(),
  createdAt: text("created_at").notNull(),
});

export const insertContactRequestSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  company: z.string(),
  service: z.string(),
  message: z.string(),
});

export type InsertContactRequest = z.infer<typeof insertContactRequestSchema>;
export type ContactRequest = typeof contactRequests.$inferSelect;

export const admins = pgTable('admins', {
  id: text('id').primaryKey(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  created_at: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`),
});

export const plans = pgTable('plans', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  price: text('price').notNull(),
  description: text('description').notNull(),
  status: text('status').notNull().default('inativo'),
  created_at: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`),
  created_by: text('created_by').notNull().references(() => admins.id),
});

export const userPlans = pgTable('user_plans', {
  id: text('id').primaryKey(),
  user_id: text('user_id').notNull().references(() => users.id),
  plan_id: text('plan_id').notNull().references(() => plans.id),
  status: text('status').notNull(),
  next_payment: timestamp('next_payment').notNull(),
  created_at: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`),
});

export type Plan = typeof plans.$inferSelect;
export type UserPlan = typeof userPlans.$inferSelect;
