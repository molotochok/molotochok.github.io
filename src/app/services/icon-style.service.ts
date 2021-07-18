import { Injectable } from '@angular/core';

@Injectable()
export class IconStyleService {

  constructor() {}

  getStyleWithMask(iconPath: string) {
    const mask = `url('${iconPath}') no-repeat center`;
    return { mask, '-webkit-mask': mask };
  }
}
