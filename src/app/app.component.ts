import { Component } from '@angular/core';
import { BaseHTTPService } from './BaseHTTP.service';
import * as moment from 'moment';
import 'moment/min/locales';

moment.locale('ar-sa');
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  private baseService: BaseHTTPService;
  notifications: any[] =  [];
  pageNumber = 0;
  pageSize = 4;
  modalIsOpen = '';
  modalTitle = 'حرك عجلة الفأرة لأسفل';
  modalScrollDistance = 4;
  modalScrollThrottle = 1050;
  reachedEndOfPosts: boolean = false;
  constructor(baseService: BaseHTTPService) {
    this.baseService = baseService;
    this.getNotification(this.pageNumber, this.pageSize);
  }
  getNotification(pageNumber, pageSize){
    this.baseService.getAll('posts?page=' + pageNumber + '&size=' + pageSize + '&sortid,asc')
                    .subscribe(posts => {
                       if(posts.json().length > 0) {
                       this.notifications = [...this.notifications, ...posts.json()]
                      } else {
                      this.reachedEndOfPosts = true;
                      }
                      });
  }
  onModalScrollDown () {
    if(!this.reachedEndOfPosts) {
    console.log('down!');
    this.pageNumber++;
    this.getNotification(this.pageNumber, this.pageSize);
    }
  }
  open () {
    this.modalIsOpen = 'in modal-open';
  }
  close () {
    this.modalIsOpen = '';
    this.pageNumber = 0;
    this.getNotification(this.pageNumber, this.pageSize);
  }
}
