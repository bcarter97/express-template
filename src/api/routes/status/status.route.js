import { Router } from "express";

const StatusRouter = Router();

StatusRouter.get("/", (req, res) => {
  res.json({
    message: "OK",
    timestamp: new Date().toISOString(),
    IP: req.ip,
    URL: req.originalUrl,
  });
});

export { StatusRouter };
