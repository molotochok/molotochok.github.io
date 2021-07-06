import { Injectable } from '@angular/core';
import { I18nService } from './i18n.service';
import { formatDate } from '@angular/common';

@Injectable()
export class DateDurationService {

  constructor(private i18nService: I18nService) {}

  displayDate(startDate: Date, endDate: Date, showDuration = true): string {
    const format = 'MM/yyyy';
    const locale = 'en';

    const start = formatDate(startDate, format, locale);
    const end = endDate
      ? formatDate(endDate, format, locale)
      : 'present';

    const months = this.monthDuration(startDate, endDate);
    const duration = showDuration
      ? ` (${this.displayDuration(months)})`
      : '';
    return `${start} - ${end}${duration}`;
  }

  displayDuration(months: number): string {
    function getValueForDisplay(duration: number, label: string) {
      return duration > 0 ? duration + ' ' + label : '';
    }

    let years = 0;
    if (months > 12) {
      years = Math.floor(months / 12);
      months %= 12;
    }

    const yearDisplay = getValueForDisplay(years, this.i18nService.getTranslation('year'));
    const monthDisplay = getValueForDisplay(months, this.i18nService.getTranslation('month'));

    return (yearDisplay ? yearDisplay + ' ' : '') + monthDisplay;
  }

  monthDuration(startDate: Date, endDate: Date): number {
    startDate = startDate ?? new Date();
    endDate = endDate ?? new Date();

    const monthDiff = endDate.getMonth() - startDate.getMonth();
    const yearDiff = endDate.getFullYear() - startDate.getFullYear();
    return monthDiff + (12 * (yearDiff)) + 1;
  }
}
