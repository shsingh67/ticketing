import {
  Publisher,
  OrderCancelledEvent,
  Subjects,
} from "@singhticketing/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
