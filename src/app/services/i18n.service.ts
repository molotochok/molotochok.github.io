import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageKeys } from '@models/consts/local-storage-keys.model';
import { I18nLocales } from '../models/consts/i18n-locales.model';

@Injectable()
export class I18nService {
  private data: any;

  constructor(private http: HttpClient) { }

  public async changeLanguage(locale: string): Promise<any> {
    return this.http.get(`/assets/i18n/${locale}.json`)
      .toPromise()
      .then((data: any) => {
        this.data = data;
        localStorage.setItem(LocalStorageKeys.I18N, JSON.stringify(this.data));
      }
    );
  }

  /** i18n file can look like this:
   * {
   *  "page_1": {
   *    "key_1": "value_1"
   *  },
   * "page_2": {
   *    "key_2": "value_2"
   *  },
   * }
   */
  public getTranslation(phrase: string, pageName: string) {
    const data = this.getData();

    if (!data) {
      return phrase;
    }

    if (pageName && data[pageName][phrase]) {
      return data[pageName][phrase];
    }

    if (data[phrase]) {
      return data[phrase];
    }

    return phrase;
  }

  public async getLocale(): Promise<string> {
    const data = this.getData();

    if (data) {
      return this.data.locale;
    }

    return await this.setDefaultLocale();
  }

  private async setDefaultLocale(): Promise<any> {
    const defaultLocale = I18nLocales.EN;
    await this.changeLanguage(defaultLocale);
    return defaultLocale;
  }

  private getData() {
    if (this.data) {
      return this.data;
    }

    const data = JSON.parse(localStorage.getItem(LocalStorageKeys.I18N));
    if (data) {
      this.data = data;
    }

    return data;
  }
}
