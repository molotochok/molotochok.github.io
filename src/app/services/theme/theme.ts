export enum ThemeTypes {
  light,
  dark,
}

/* Template: --c<from color>-<for what>  */
export interface Theme {
  "--app-main": string;
  "--app-text": string;
  "--app-menu": string;
  "--app-menu-item": string;
  "--app-menu-item-active": string;
  "--app-btn": string;
}

export class LightTheme implements Theme {
  "--app-main": string = "#eeeeee";
  "--app-text": string = "#000000";
  "--app-menu": string = "#0064b7";
  "--app-menu-item": string = "#64c1ff";
  "--app-menu-item-active": string = "#eeeeee";
  "--app-btn": string = "#ff5252";
}

export class DarkTheme implements Theme {
  "--app-main": string = "#303030";
  "--app-text": string = "#FFFFFF";
  "--app-menu": string = "#191919";
  "--app-menu-item": string = "#3e4042";
  "--app-menu-item-active": string = "#303030";
  "--app-btn": string = "#3f51b5";
}

export const THEMES = {
  [ThemeTypes.light]: new LightTheme(),
  [ThemeTypes.dark]: new DarkTheme()
}