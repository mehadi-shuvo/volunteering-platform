import express, { Request, Response } from "express";
import router from "./app/routes";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// middlewares ===
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());

// root api ===
app.get("/", (req: Request, res: Response) => {
  res.send("Volunteering server is running 🚀");
});

// app's api ===
app.use("/api", router);

export default app;
