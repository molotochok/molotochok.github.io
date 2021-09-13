import { IconStyleService } from '@services/icon-style.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

declare var UnityLoader: any;

@Component({
  selector: 'app-das-demo',
  templateUrl: './das-demo.component.html',
  styleUrls: ['./das-demo.component.scss']
})
export class DasDemoComponent implements OnInit {

  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  modal: NgbModalRef;
  unityInstance: any;

  get fullscreenIconStyle() {
    return this.iconStyleService.getStyleWithMask('assets/images/drag-and-score/fullscreen.svg');
  }

  constructor(
    private modalService: NgbModal,
    private iconStyleService: IconStyleService
  ) {}

  ngOnInit(): void {}

  open(): void {
    const options = {
      ariaLabelledBy: 'modal-drag-and-score',
      keyboard: false
    };

    this.modal = this.modalService.open(this.modalContent, options);

    this.modal.shown.subscribe(() => this.startUnity());

    this.modal.result.then(
      _ => {},
      _ => this.quitUnity()
    );
  }

  startUnity(): void {
    this.unityInstance = UnityLoader.instantiate(
      'unityContainer',
      'assets/unity/drag-and-score/Desktop.json'
    );
  }

  quitUnity(): void {
    this.unityInstance.Quit();
    this.unityInstance = null;
  }
}
