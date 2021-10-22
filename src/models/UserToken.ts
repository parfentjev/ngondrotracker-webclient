class UserToken {
  token: string;
  expirationDate: Date;

  constructor(token: string, expirationDate: Date) {
    this.token = token;
    this.expirationDate = expirationDate;
  }
}

export default UserToken;
