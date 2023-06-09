import { Status } from 'src/app/utilities/status';

export function setCompleteStatus(status: string): string {
  if (status === ShortStatus.ACTIVE) return Status.ACTIVE;
  else return Status.INACTIVE;
}

enum ShortStatus {
  ACTIVE = 'A',
  INACTIVE = 'I',
}
