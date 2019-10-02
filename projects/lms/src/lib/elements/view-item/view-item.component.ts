import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { IViewItem} from '../../interfaces/IViewItem';
@Component({
  selector: 'lib-view-item',
  template: `
  <ng-template>
   <span *ngIf="data.visible" class="meta-data">
    <span class="label">{{data.label}}</span>
     <span class="description">{{data.description}}</span>
    </span> 
    <ng-content></ng-content>
</ng-template>
  `,
  styles: [
      `
      .meta-data{
          position: absolute;
          z-index:1003;
        background: #ccc;
        width:200px;
        height:65px;
        left:25px;
        top:25px;
      }
  .label {
      position:absolute;
      top:0;
      left:0;
      width:150px;
 

  }
  .description {
      position:absolute;
      top:45px;
      left:25px; width:150px;
  }

  
  `]
})
export class ViewItemComponent implements OnInit {
     /** Template for page content. */
  @ViewChild(TemplateRef, { static: false }) content: TemplateRef<any>;

  @Input()
  data: IViewItem;
  constructor() { }
  ngOnInit() {
  }

}
