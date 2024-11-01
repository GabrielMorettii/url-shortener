export class UserModel {
  public readonly id?: string;
  public name!: string;
  public email!: string;
  public password!: string;
  public readonly createdAt?: Date;
  public readonly updatedAt?: Date | null;

  constructor(props: UserModel) {
    Object.assign(this, props);

    if (props.id) {
      this.updatedAt = new Date();
    }
  }
}
