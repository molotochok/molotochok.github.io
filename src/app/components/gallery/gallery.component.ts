import { IconStyleService } from '@services/icon-style.service';
import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Media } from '@/app/models/media.model';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @ViewChild('imgModal') imgModal: TemplateRef<any>;
  @Input() mediaList: Media[];

  activeIndex = 0;

  get arrowIconStyle() {
    return this.iconStyleService.getStyleWithMask('assets/images/next.svg');
  }

  get dotsIconStyle() {
    return this.iconStyleService.getStyleWithMask('assets/images/dot.svg');
  }

  get mediaStyle() {
    return {transform: `translateX(-${this.activeIndex * 800}px)` };
  }

  constructor(
    private modalService: NgbModal,
    private iconStyleService: IconStyleService
  ) { }

  ngOnInit(): void {}

  activeClass(index: number) {
    return this.activeIndex === index ? 'active' : '';
  }

  prev(): void {
    this.activeIndex = this.activeIndex === 0
      ? this.mediaList.length - 1
      : this.activeIndex - 1;
  }

  next(): void {
    this.activeIndex = (this.activeIndex + 1) % this.mediaList.length;
  }

  dotClick(index: number): void {
    this.activeIndex = index;
  }

  imgClick() {
    const options = {
      ariaLabelledBy: 'image',
    };

    this.modalService.open(this.imgModal, options);
  }
}
