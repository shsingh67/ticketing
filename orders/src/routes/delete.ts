import express, { Request, Response } from "express";
import { NotAuthorizedError, requireAuth } from "@singhticketing/common";
import { Order, OrderStatus } from "../models/order";

const router = express.Router();

router.delete("/api/orders/:orderId", async (req: Request, res: Response) => {
  const { orderId } = req.params;

  const order = await Order.findById(orderId);

  if (!order) {
    throw new NotAuthorizedError();
  }
  if (order.userId !== req.currentUser!.id) {
    throw new NotAuthorizedError();
  }
  order.status = OrderStatus.Cancelled;
  await order.save();

  //publish an event saying this was cancelled

  res.status(204).send(order);
});

export { router as deleteOrderRouter };
