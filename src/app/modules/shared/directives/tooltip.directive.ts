import { Directive, ElementRef, HostListener, Renderer2, ViewContainerRef, Input, TemplateRef, ContentChild } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {

  constructor(
    private renderer: Renderer2,
    private e: ElementRef,
    private viewContainerRef: ViewContainerRef
  ) { }

  @Input() parm: TemplateRef<any>;
  @ContentChild('tooltipTemplate') tooltipTemplateRef: TemplateRef<any>;

  @HostListener('mouseenter') onMouseIn() {
    const view = this.viewContainerRef.createEmbeddedView(this.tooltipTemplateRef);
    view.rootNodes.forEach(node =>
      this.renderer.appendChild(this.e.nativeElement, node));
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.viewContainerRef) {
      this.viewContainerRef.clear();
    }
  }

}
