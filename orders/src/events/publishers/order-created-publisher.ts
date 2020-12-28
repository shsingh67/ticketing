import { Publisher, OrderCreatedEvent, Subjects } from "@singhticketing/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
