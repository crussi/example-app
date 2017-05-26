import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { InboxItem } from '../shared/barrel';

@Injectable()
export class InboxService {

  constructor() { }

  getInboxItems():Observable<InboxItem[]> {
    var list = [
      new InboxItem("1","Remember to buy milk",new Date(2017,5,15),"Chris"),
      new InboxItem("2","Buy postage stamps",new Date(2017,5,15),"Michele"),
      new InboxItem("3","Order drum set",new Date(2017,5,15),"Isaac"),
      new InboxItem("4","Fertilize the yard",new Date(2017,5,15),"Chris"),

    ]
    return Observable.of(list)
  }

}
