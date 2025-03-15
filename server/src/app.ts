import express, { Request, Response } from "express";
import router from "./app/routes";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.get("/", (req: Request, res: Response) => {
  res.send("Volunteering server is running 🚀");
});

app.use("/api", router);

export default app;
