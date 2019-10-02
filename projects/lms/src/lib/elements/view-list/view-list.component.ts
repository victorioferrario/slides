import {
    AfterContentInit,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    HostListener,
    Input,
    OnInit,
    Output,
    QueryList,
    Renderer2,
    ViewChild
} from '@angular/core';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}

import { ViewItemComponent } from '../view-item/view-item.component';
import { ViewLoaderComponent } from '../view-loader/view-loader.component';
@Component({
  selector: 'lib-view-list',
  template: `  
  <section style="position:relative;">
    <header style="position:absolute;z-index:10000;top:25px;right:5px;width:50px;">{{display_index}} / {{display_totalPages}}</header>
    <article class="left" *ngIf="hasPrevious">
        <a mat-mini-fab color="primary" href="javascript:void(0);" (click)="previous()"><mat-icon>keyboard_arrow_left</mat-icon></a>
    </article>
    <article *ngFor="let view of views;let i = index;">        
        <ng-container [ngTemplateOutlet]="view.viewContent.content"></ng-container>
    </article>
    <article class="right" *ngIf="hasNext">
        <a mat-mini-fab color="primary" href="javascript:void(0);" (click)="next()"><mat-icon>keyboard_arrow_right</mat-icon></a>
    </article>
     
  </section>

  `,
  styles: [`
   :host{
       width:100%;
       display:block;
   }
    section {
        width: 100%;        
        min-height:600px;
        border: solid 1px #000000;
        background-color:#ccc;
        overflow:hidden;
        position:relative;
    }
    .left {
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        width:75px;
        text-align:center;
        background-color:rgba(250,250,250,.2);
        padding-top:25%;       
        font-weight:600;
        z-index: 1000;
    }
    .right {
        position:absolute;
        top:0;
        bottom:0;
        right:0;
        width:75px;
        text-align:center;
        background-color:rgba(250,250,250,.2);
        padding-top:25%;
        font-weight:600;
          z-index: 1000;
        

    }
  `]
})
export class ViewListComponent implements  OnInit, AfterContentInit {

@HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event);
    
    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      this.next();
    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      this.previous();
    }
  }
  

  hasNext:boolean = true;
  hasPrevious: boolean = false;

  @ContentChildren(ViewLoaderComponent)
  views: QueryList<ViewLoaderComponent>;
   // current page
   index: number;
   display_index: number;
   display_totalPages: number;
   // the total number of pages to render
   totalPages: number;

   @Output()
    done: EventEmitter<void> = new EventEmitter<void>();

   @Output()
    pageChanged: EventEmitter<number> = new EventEmitter<number>();
    constructor(private renderer: Renderer2) {
        this.index = 0;
        this.display_index =1;
    }
    ngOnInit() {
    }
    ngAfterContentInit() {
        this.totalPages = this.views.length - 1 ;
        this.display_totalPages = this.views.length;
    }
    previous() {
        this.index = this.index === 0 ? 0 : --this.index;
        this.hasNext = this.index < this.totalPages;
        this.hasPrevious = this.index > 0;
        this.pageChanged.emit(this.index);
    }

    /**
     * Go to the next page if it exists
     */
    next() {
        this.index = this.index === this.totalPages  ? this.totalPages : ++this.index;
        this.display_index = this.index + 1;
        this.hasPrevious = this.display_index > 0;
        this.hasNext = this.index < this.totalPages ;
        this.pageChanged.emit(this.index);
        if (this.index === this.totalPages ) {
            this.done.emit();
        }
    }
    /**
     * Update the value of the index when a step has been selected.
     * Emit this value for pagechanged's subscribers.
     *
     */
    onStepSelectionChange(event: any) {
        this.index = event.selectedIndex;
        this.pageChanged.emit(this.index);
    }

}
