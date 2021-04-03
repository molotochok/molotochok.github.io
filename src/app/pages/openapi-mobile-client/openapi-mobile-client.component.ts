import { I18nKeys } from '@/app/models/consts/i18n-keys.model';
import { I18nPipe } from '@/app/pipes/i18n.pipe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-openapi-mobile-client',
  templateUrl: './openapi-mobile-client.component.html',
  styleUrls: ['./openapi-mobile-client.component.scss']
})
export class OpenapiMobileClientComponent implements OnInit {

  public readonly pageName = 'openapi-mobile-client';
  public i18nKeys = I18nKeys.OpenApiMobileClient;

  constructor(private translator: I18nPipe) {}

  ngOnInit() {}

  change_language(locale) {
    this.translator.changeLanguage(locale);
  }

}
