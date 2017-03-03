import { Component,
         Input,
         OnChanges,
         SimpleChange,
         ChangeDetectionStrategy,
         ElementRef,
         Renderer } from '@angular/core';

@Component({
  selector: 'svg-icon',
  templateUrl: './icon.component.html',
  host: {
    'role': 'img',
    '[class.svg-icon]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent implements OnChanges {
  @Input() alt: string;
  @Input('svg-width') svgWidth: number;
  @Input('svg-height') svgHeight: number;

  private _name: string;
  private _previousAriaLabel: string;

  constructor(
    private _el: ElementRef,
    private _renderer: Renderer) {}

  @Input()
  set name(iconName: string) {
    this._name = (iconName && `#${iconName}`) || '';
  }

  get name(): string {
    return this._name;
  }

  @Input() set size(size: number) {
    this.svgWidth = size;
    this.svgHeight = size;
  }

  get size() {
    return this.svgWidth;
  }

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    this._updateAriaLabel();
  }

  private _getAriaLabel(): string {
    return this.alt || this.name;
  }

  private _updateAriaLabel() {
    const label = this._getAriaLabel();

    if (label !== this._previousAriaLabel) {
      this._renderer.setElementAttribute(this._el.nativeElement, 'aria-label', label);
      this._previousAriaLabel = label;
    }
  }
}
