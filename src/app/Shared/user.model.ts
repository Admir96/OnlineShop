export class userModel{
  constructor(private email:string,
              private id:string,
              private token:string,
              private tokenExpD:Date) {}

  get Token()
  {
    if(!this.tokenExpD || new Date() > this.tokenExpD)
      return null;

    return this.token;
  }
}
