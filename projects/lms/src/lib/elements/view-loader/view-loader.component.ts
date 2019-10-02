import { Component, ContentChild } from '@angular/core';
import { ViewItemComponent } from '../view-item/view-item.component';
@Component({
    selector: 'lib-view-loader',
    templateUrl: './view-loader.component.html',
    styleUrls: ['./view-loader.component.scss']
})
export class ViewLoaderComponent {
    @ContentChild(ViewItemComponent, { static: false }) viewContent: ViewItemComponent;
}