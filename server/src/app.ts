import express, { Request, Response } from "express";
import router from "./app/routes";

const app = express();

app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.send("Volunteering server is running 🚀");
});

app.use("/api", router);

export default app;
