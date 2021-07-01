import { ThemeTypes } from '@services/theme/theme';

export class Theme {
  public constructor(
    public src: string,
    public type: ThemeTypes,
    public active: boolean
  ) {}
}
