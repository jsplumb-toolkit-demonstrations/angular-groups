import {Component, ElementRef, Input} from '@angular/core';
import {jsPlumbService } from "@jsplumbtoolkit/angular"
import * as SyntaxHighlighter from "@jsplumb/json-syntax-highlighter"
import {BrowserUI} from "@jsplumbtoolkit/browser-ui"


@Component({
  selector:"jsplumb-dataset",
  template:'<div class="jtk-demo-dataset"></div>'
})
export class DatasetComponent {
  toolkit:BrowserUI;

  @Input() toolkitId:string;

  constructor(private el: ElementRef, private $jsplumb:jsPlumbService) { }

  ngOnInit() {
    this.toolkit = this.$jsplumb.getToolkit(this.toolkitId)
  }

  getNativeElement(component:any) {
    return (component.nativeElement || component._nativeElement || component.location.nativeElement).childNodes[0];
  }

  ngAfterViewInit() {
    SyntaxHighlighter.newInstance(this.toolkit, this.getNativeElement(this.el))
  }
}
