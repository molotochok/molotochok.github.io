import { IconStyleService } from '@services/icon-style.service';
import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Media } from '@models/media.model';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  static DEFAULT_SPACE_BETWEEN = 150;

  @ViewChild('imgModal') imgModal: TemplateRef<any>;

  @Input() mediaList: Media[];
  @Input() spaceBetween: number;

  mediaStyle: {};
  arrowIconStyle: {};
  dotsIconStyle: {};
  imgStyle: {};

  activeIndex = 0;

  get viewportWidth() {
    return this.mediaList[0].width + this.spaceBetween;
  }

  get mediaListStyle() {
    return {
      transform: `translateX(-${this.activeIndex * this.viewportWidth}px)`
    };
  }

  get mediaListContainerStyle() {
    return {
      width: `${this.viewportWidth}px`,
    };
  }

  constructor(
    private modalService: NgbModal,
    private iconStyleService: IconStyleService
  ) { }

  ngOnInit(): void {
    this.spaceBetween ??= GalleryComponent.DEFAULT_SPACE_BETWEEN;

    this.initMediaStyle();
    this.initArrowIconStyle();
    this.initDotsIconStyle();
    this.initImgStyle();
  }

  activeClass(index: number) {
    return this.activeIndex === index ? 'active' : '';
  }

  /*** Init functions  ***/
  initMediaStyle(): void {
    const halfSpace = this.spaceBetween / 2;

    this.mediaStyle = {
      'margin-left': halfSpace + 'px',
      'margin-right': halfSpace + 'px'
    };
  }
  initArrowIconStyle(): void {
    this.arrowIconStyle = this.iconStyleService.getStyleWithMask('assets/images/next.svg');
  }

  initDotsIconStyle(): void {
    this.dotsIconStyle = this.iconStyleService.getStyleWithMask('assets/images/dot.svg');
  }

  initImgStyle() {
    const toCssProperty = (num: number) => {
      return num ? num + 'px' : 'auto';
    };

    this.imgStyle = {
      width: toCssProperty(this.mediaList[0].width),
      height: toCssProperty(this.mediaList[0].height)
    };
  }

  /*** Event Handlers ***/
  prevClick(): void {
    this.activeIndex = this.activeIndex === 0
      ? this.mediaList.length - 1
      : this.activeIndex - 1;
  }

  nextClick(): void {
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
