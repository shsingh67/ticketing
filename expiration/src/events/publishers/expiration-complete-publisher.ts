import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@singhticketing/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
