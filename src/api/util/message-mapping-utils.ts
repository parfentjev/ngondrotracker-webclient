export enum ServerMessages {
  UNKNOWN_ERROR = 'Unknown error',
  ALREADY_EXISTS = '%s with this email already exists',
  VALIDATION_ERROR = '%s form data is not valid',
}

export const mapMessage = (
  message: ServerMessages,
  objectIdentifier?: string
) => {
  return `${message}`.replace('%s', objectIdentifier);
};
