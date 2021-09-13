import { IconStyleService } from '@services/icon-style.service';
import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { SelectOption } from '@models/select.model';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() selectedOption: SelectOption;
  @Input() options: SelectOption[];
  @Input() i18nSourcePath: string;

  @Output() optionSelected = new EventEmitter<SelectOption>();

  arrowIconStyle: {};
  optionsShown = false;

  get arrowIconClasses() {
    return this.optionsShown ? 'arrow-down' : 'arrow-up';
  }

  get optionsClasses() {
    return this.optionsShown ? 'active' : 'non-active';
  }

  constructor(
    private iconStyleService: IconStyleService,
    private eref: ElementRef
  ) { }

  ngOnInit(): void {
    this.initArrowIconStyle();
  }

  initArrowIconStyle(): void {
    this.arrowIconStyle = this.iconStyleService.getStyleWithMask('assets/images/arrow.svg');
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (this.eref.nativeElement.contains(event.target)) {
      return;
    }

    this.hideOptions();
  }

  optionWrapperClasses(option: SelectOption): string {
    return this.selectedOption.value === option.value
      ? 'disabled'
      : '';
  }

  selectClick(): void {
    this.toggleOptions();
  }

  optionClick(option: SelectOption): void {
    this.selectedOption = option;
    this.optionSelected.emit(option);
    this.hideOptions();
  }

  showOptions(): void {
    this.optionsShown = true;
  }

  hideOptions(): void {
    this.optionsShown = false;
  }

  toggleOptions(): void {
    this.optionsShown = !this.optionsShown;
  }
}
