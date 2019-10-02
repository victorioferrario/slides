import { Injectable } from '@angular/core';
import { IViewItem } from './interfaces/IViewItem';
@Injectable({
  providedIn: 'root'
})
export class LmsService {
  data: IViewItem[] = [
    {
      id: 0,
      label: 'Title Screen',
      path: 'assets/guide-1/title.png',
      description: 'This is title.',
      visible: true
    },
    {
      id: 1,
      label: 'Image 1',
      path: 'assets/guide-1/image-1.png',
      description: 'This is image one.',
      visible: false
    },
    {
      id: 2,
      label: 'Image 2',
      path: 'assets/guide-1/image-2.png',
      description: 'This is image two.',
      visible: false
    },
    {
      id: 3,
      label: 'Image 3',
      path: 'assets/guide-1/image-3.png',
      description: 'This is image three.',
      visible: false
    },
    {
      id: 4,
      label: 'Image 4',
      path: 'assets/guide-1/image-4.png',
      description: 'This is image four.',
      visible: false
    }
  ];
  constructor() { }

  reset() {
    this.data.forEach((item: IViewItem) => {
        item.visible = false;
      });
  }
}
