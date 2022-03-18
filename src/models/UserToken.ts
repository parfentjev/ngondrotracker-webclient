class UserToken {
  token: string;
  expirationDate: Date;
  roles: string;

  constructor(token: string, expirationDate: Date, roles: string) {
    this.token = token;
    this.expirationDate = expirationDate;
    this.roles = roles;
  }
}

export default UserToken;
