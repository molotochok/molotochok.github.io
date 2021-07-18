export abstract class Media {
  public constructor(
    public uri: string,
    public width: string = '750px',
    public height: string = '422px',
  ) {}

  isVideo() {
    return false;
  }

  isImage() {
    return false;
  }
}
