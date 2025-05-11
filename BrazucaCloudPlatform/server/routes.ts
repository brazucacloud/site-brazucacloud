import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { db } from "./db";
import { users } from "@shared/schema";
import { eq } from "drizzle-orm";
import { insertContactRequestSchema } from "@shared/schema";
import { z } from "zod";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const contactData = insertContactRequestSchema.parse(req.body);

      // Add timestamp
      const contactRequestWithTimestamp = {
        ...contactData,
        createdAt: new Date().toISOString(),
      };

      // Store the contact request
      const result = await storage.createContactRequest(contactRequestWithTimestamp);

      // Return success response
      return res.status(201).json({
        message: "Contact request submitted successfully",
        contactRequest: result
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({
          message: "Validation error",
          errors: validationError.message
        });
      }

      return res.status(500).json({
        message: "An error occurred while processing your request",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  // Auth endpoints
  app.post("/api/auth/register", async (req, res) => {
    const { email, password, fullname, phone } = req.body;
    try {
      const newUser = await storage.createUser({
        email,
        password,
        fullname,
        phone,
        createdAt: new Date().toISOString()
      });

      res.status(201).json({ 
        success: true,
        user: {
          id: newUser.id,
          email: newUser.email,
          name: newUser.name
        }
      });
    } catch (error) {
      console.error('Erro ao registrar:', error);
      res.status(400).json({ error: "Erro ao criar conta: " + error.message });
    }
  });

  app.post("/api/auth/login", async (req, res) => {
    const { email, password } = req.body;
    try {
      if (!email || !password) {
        return res.status(400).json({ error: "E-mail e senha são obrigatórios" });
      }

      const [user] = await db.select().from(users).where(eq(users.email, email)).limit(1);

      if (!user) {
        return res.status(401).json({ error: "E-mail ou senha inválidos" });
      }

      if (user.password !== password) {
        return res.status(401).json({ error: "E-mail ou senha inválidos" });
      }

      res.json({ 
        success: true,
        user: {
          id: user.id,
          email: user.email,
          fullname: user.fullname
        }
      });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ error: "Erro ao fazer login" });
    }
  });

  // Get all contact requests (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const contactRequests = await storage.getAllContactRequests();
      return res.status(200).json(contactRequests);
    } catch (error) {
      return res.status(500).json({
        message: "An error occurred while retrieving contact requests",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  // Auth status endpoint
  app.get("/api/auth/status", async (req, res) => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader) {
        return res.json({ authenticated: false });
      }

      const [email] = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
      const [user] = await db.select().from(users).where(eq(users.email, email)).limit(1);

      if (!user) {
        return res.json({ authenticated: false });
      }

      const userPlans = await storage.getAllUsers();
      const currentUser = userPlans.find(u => u.id === user.id);

      if (!user) {
        return res.json({ authenticated: false });
      }

      return res.json({ 
        authenticated: true,
        user: { 
          id: user.id,
          fullname: user.fullname
        },
        plans: currentUser?.plans || []
      });
    } catch (error) {
      console.error('Auth status error:', error);
      return res.json({ authenticated: false });
    }
  });

  const httpServer = createServer(app);

  // Admin authentication middleware
  const requireAdmin = async (req: any, res: any, next: any) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    try {
      const [email, password] = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
      const admin = await storage.getAdminByEmail(email);

      if (!admin || admin.password !== password) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      req.admin = admin;
      next();
    } catch (error) {
      res.status(401).json({ error: "Authentication failed" });
    }
  };

  // Check if first admin setup is needed
  app.get("/api/admin/setup-required", async (req, res) => {
    const hasAdmins = await storage.hasAdmins();
    res.json({ setupRequired: !hasAdmins });
  });

  // Create first admin
  app.post("/api/admin/setup", async (req, res) => {
    const hasAdmins = await storage.hasAdmins();
    if (hasAdmins) {
      return res.status(400).json({ error: "Admin already exists" });
    }

    try {
      const admin = await storage.createAdmin(req.body);
      res.status(201).json({ success: true, admin: { id: admin.id, email: admin.email } });
    } catch (error) {
      res.status(500).json({ error: "Failed to create admin" });
    }
  });

  // Admin login
  app.post("/api/admin/login", async (req, res) => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      const [email, password] = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
      const admin = await storage.getAdminByEmail(email);

      if (!admin || admin.password !== password) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
      const adminData = { id: admin.id, email: admin.email };
      res.json({ success: true, admin: adminData });
    } catch (error) {
      res.status(500).json({ error: "Login failed" });
    }
  });

  // Admin routes
  app.get("/api/admin/verify", async (req, res) => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      const [email, password] = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
      const admin = await storage.getAdminByEmail(email);

      if (!admin || admin.password !== password) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      return res.json({ success: true, admin: { id: admin.id, email: admin.email } });
    } catch (error) {
      res.status(401).json({ error: "Authentication failed" });
    }
  });

  app.get("/api/admin/plans", async (req, res) => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      const [email, password] = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
      const admin = await storage.getAdminByEmail(email);

      if (!admin || admin.password !== password) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      const plans = await storage.getAllPlans();
      res.json(plans);
    } catch (error) {
      console.error('Error in /api/admin/plans:', error);
      res.status(500).json({ error: (error as Error).message || "Error fetching plans" });
    }
  });

  app.post("/api/admin/plans", requireAdmin, async (req, res) => {
    try {
      const plan = await storage.createPlan(req.body);
      res.status(201).json(plan);
    } catch (error) {
      res.status(500).json({ error: "Error creating plan" });
    }
  });

  app.put("/api/admin/plans/:id", requireAdmin, async (req, res) => {
    try {
      const plan = await storage.updatePlan(req.params.id, req.body);
      res.json(plan);
    } catch (error) {
      res.status(500).json({ error: "Error updating plan" });
    }
  });

  app.delete("/api/admin/plans/:id", requireAdmin, async (req, res) => {
    try {
      await storage.deletePlan(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Error deleting plan" });
    }
  });

  app.get("/api/admin/users", async (req, res) => {
    try {
      const users = await storage.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: "Error fetching users" });
    }
  });

  app.post("/api/admin/users/:userId/plans", async (req, res) => {
    try {
      const { userId } = req.params;
      const { planId } = req.body;
      await storage.assignPlanToUser(userId, planId);
      const users = await storage.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: "Error assigning plan to user" });
    }
  });

  // User routes
  app.get("/api/users/plans", async (req, res) => {
    try {
      const userId = req.headers["x-user-id"];
      if (!userId) {
        return res.status(401).json({ error: "Unauthorized" });
      }
      const plans = await storage.getUserPlans(userId.toString());
      res.json(plans);
    } catch (error) {
      res.status(500).json({ error: "Error fetching user plans" });
    }
  });

  return httpServer;
}