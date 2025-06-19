import type { Express } from "express";
import { createServer, type Server } from "http";
import rateLimit from "express-rate-limit";
import { storage } from "./storage";
import { insertChatMessageSchema, insertContactSubmissionSchema } from "@shared/schema";
import { getChatbotResponse } from "./services/openai";

export async function registerRoutes(app: Express): Promise<Server> {

  // Apply rate limiting to /api/chat to prevent abuse
  const chatLimiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 30, // max 30 requests per minute per IP
    message: "Too many requests, please try again later."
  });

  // Chatbot endpoint
  app.post("/api/chat", chatLimiter, async (req, res) => {
    try {
      const { message } = req.body;

      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      console.log("Received chat message:", message);

      const response = await getChatbotResponse(message);

      // Save the chat message to storage
      await storage.saveChatMessage({ message, response });

      res.json({ response });
    } catch (error) {
      console.error("Chat error:", error);
      res.status(500).json({ error: "Failed to process chat message" });
    }
  });

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.saveContactSubmission(validatedData);

      res.json({
        success: true,
        message: "Thank you for your message! Prateek will get back to you soon.",
        id: submission.id
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ error: "Failed to submit contact form" });
    }
  });

  // // Get chat history (admin only)
  // app.get("/api/chat/history", async (req, res) => {
  //   const authHeader = req.headers.authorization;
  //   const adminToken = process.env.ADMIN_TOKEN;

  //   if (!adminToken || authHeader !== `Bearer ${adminToken}`) {
  //     return res.status(401).json({ error: "Unauthorized" });
  //   }

  //   try {
  //     const messages = await storage.getChatMessages();
  //     res.json(messages);
  //   } catch (error) {
  //     console.error("Chat history error:", error);
  //     res.status(500).json({ error: "Failed to fetch chat history" });
  //   }
  // });

  // Start the HTTP server
  const httpServer = createServer(app);
  return httpServer;
}
