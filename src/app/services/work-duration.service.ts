import { Injectable } from '@angular/core';
import { WorkExperience } from '@models/work-experience.model';
import { I18nService } from './i18n.service';
import { formatDate } from '@angular/common';

@Injectable()
export class WorkDurationService {

  constructor(private i18nService: I18nService) {}

  displayDate(workExperience: WorkExperience, pageName: string): string {
    const format = 'MM/yyyy';
    const locale = 'en';

    const startDate = workExperience.startDate;
    const endDate = workExperience.endDate;

    const start = formatDate(startDate, format, locale);
    const end = endDate
      ? formatDate(endDate, format, locale)
      : 'present';

    const months = this.monthDuration(startDate, endDate);
    return `${start} - ${end} (${this.displayDuration(months, pageName)})`;
  }

  displayDuration(months: number, pageName: string): string {
    function getValueForDisplay(duration: number, label: string) {
      return duration > 0 ? duration + ' ' + label : '';
    }

    let years = 0;
    if (months > 12) {
      years = Math.floor(months / 12);
      months %= 12;
    }

    const yearDisplay = getValueForDisplay(years, this.i18nService.getTranslation(pageName + '/year'));
    const monthDisplay = getValueForDisplay(months, this.i18nService.getTranslation(pageName + '/month'));

    return (yearDisplay ? yearDisplay + ' ' : '') + monthDisplay;
  }

  monthDuration(dateFrom: Date, dateTo: Date): number {
    dateFrom = dateFrom ?? new Date();
    dateTo = dateTo ?? new Date();

    const monthDiff = dateTo.getMonth() - dateFrom.getMonth();
    const yearDiff = dateTo.getFullYear() - dateFrom.getFullYear();
    return monthDiff + (12 * (yearDiff)) + 1;
  }
}
