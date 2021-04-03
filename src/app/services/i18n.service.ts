import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { LocalStorageKeys } from '@models/consts/local-storage-keys.model';

@Injectable()
export class I18nService {
  private data: {} = null;

  constructor(private http: HttpClient) {
    const data = this.getData();
    if(!data) {
      this.getAndUpdateI18n(navigator.language);
    }
  }

  public async changeLanguage(locale: string) {
    await this.getAndUpdateI18n(locale);
  }

  public getTranslation(phrase: string) {
    const data = this.getData();
    return data && data[phrase] ? data[phrase] : phrase;
  } 

  private getAndUpdateI18n(locale: string) : Promise<any> {
    return this.http.get(`/assets/i18n/${locale}.json`).toPromise()
      .then((data: any) => { 
        this.data = data;
        localStorage.setItem(LocalStorageKeys.I18n, JSON.stringify(this.data));
      }
    );
  }

  private getData() {
    if(this.data)
      return this.data;
    
    const data = JSON.parse(localStorage.getItem(LocalStorageKeys.I18n));
    if(data) {
      this.data = data;
    }

    return data;
  }
}