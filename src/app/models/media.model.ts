export abstract class Media {
  public constructor(
    public uri: string,
    // In pixels
    public width: number = null,
    public height: number = null,
  ) {}

  isVideo() {
    return false;
  }

  isImage() {
    return false;
  }
}
