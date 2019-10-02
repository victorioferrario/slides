import { Component } from '@angular/core';
import { LmsService , IViewItem} from '@lms/public-api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data:any[];
  title = 'lms-workspace';
  constructor(public lmsService: LmsService){

  }
  onPageChanged(event:any){
    console.log(event);
    this.lmsService.reset();
    this.lmsService.data.forEach((item: IViewItem) => {
      if (item.id === event) {
        item.visible = true;
        item.cssStyle = "fadeIn";
      }
    })
  }
}
