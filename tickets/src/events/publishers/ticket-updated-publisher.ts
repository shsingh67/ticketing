import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from "@singhticketing/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
