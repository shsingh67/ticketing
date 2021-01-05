import {
  Subjects,
  Publisher,
  PaymentCreatedEvent,
} from "@singhticketing/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
