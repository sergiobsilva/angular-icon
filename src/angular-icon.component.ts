import {
  Component,
  Input,
  HostBinding,
  ViewEncapsulation,
  ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'svg-icon',
  template: `
    <svg [attr.width]="svgWidth"
         [attr.height]="svgHeight">
      <svg:use [attr.xlink:href]="name"
               fill="currentColor"></svg:use>
    </svg>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
  @HostBinding('attr.role') role = 'img';
  @HostBinding('attr.aria-label') ariaLabel: string;
  @HostBinding('class.svg-icon') iconClassName = true;

  @Input() svgWidth: number;
  @Input() svgHeight: number;

  @Input()
  set alt(value: string) {
    this.ariaLabel = value;
  }

  get alt(): string {
    return this.ariaLabel;
  }

  @Input()
  set name(iconName: string) {
    this._name = `#${iconName}`;
  }

  get name(): string {
    return this._name;
  }

  @Input()
  set size(size: number) {
    this.svgWidth = size;
    this.svgHeight = size;
  }

  get size(): number {
    return this.svgWidth;
  }

  private _name: string;
}
