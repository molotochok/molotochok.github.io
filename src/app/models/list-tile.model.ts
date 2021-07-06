export class ListTile {
  public constructor(
    public key: string,
    public logo: string,
    public title: string,
    public subtitle1: string,
    public subtitle2: string,
    public description: string,
    public useI18n: boolean,
    public startDate: Date,
    public endDate: Date
  ) {}
}
