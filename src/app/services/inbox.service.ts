import { Injectable } from '@angular/core';
import { InboxItem } from '../models/inbox';

@Injectable()
export class InboxService {

  constructor() { }

  getInboxItems() {
    return [
      new InboxItem("Remember to buy milk",new Date(2017,5,15),"Chris"),
      new InboxItem("Buy postage stamps",new Date(2017,5,15),"Michele"),
      new InboxItem("Order drum set",new Date(2017,5,15),"Isaac"),
      new InboxItem("Fertilize the yard",new Date(2017,5,15),"Chris"),

    ]
  }

}
