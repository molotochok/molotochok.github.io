import { IconStyleService } from '@services/icon-style.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

declare var UnityLoader: any;

@Component({
  selector: 'app-das-demo',
  templateUrl: './das-demo.component.html',
  styleUrls: ['./das-demo.component.scss']
})
export class DasDemoComponent implements OnInit {

  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  unityInstance: any;

  get fullscreenIconStyle() {
    return this.iconStyleService.getStyleWithMask('assets/images/drag-and-score/fullscreen.svg');
  }

  constructor(
    private modalService: NgbModal,
    private iconStyleService: IconStyleService
  ) {}

  ngOnInit(): void {}

  open() {
    const options = {
      ariaLabelledBy: 'modal-drag-and-score',
      keyboard: false
    };

    this.modalService.open(this.modalContent, options).shown.subscribe(() => {
      this.unityInstance = UnityLoader.instantiate(
        'unityContainer',
        'assets/unity/drag-and-score/Desktop.json'
      );
    });
  }
}
