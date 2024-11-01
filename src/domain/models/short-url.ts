export class ShortUrlModel {
  public readonly id?: string;
  public originalUrl!: string;
  public shortUrl!: string;
  public clicks!: number;
  public userId?: string;
  public readonly createdAt?: Date;
  public readonly updatedAt?: Date | null;
  public readonly deletedAt?: Date | null;

  constructor(props: ShortUrlModel) {
    Object.assign(this, props);

    if (props.id) {
      this.updatedAt = new Date();
    }
  }
}
