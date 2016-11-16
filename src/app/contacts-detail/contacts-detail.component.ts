import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';
import { EventBusService } from '../event-bus.service';

@Component({
  selector: 'trm-contacts-detail',
  templateUrl: './contacts-detail.component.html'
})

export class ContactsDetailComponent implements OnInit{
    
  @Input() contact: Contact;  
  @Output() edit = new EventEmitter<Contact>();
  @Output() back = new EventEmitter<void>();

  public title: string;

  constructor(private eventBusService: EventBusService) {
  }

  ngOnInit() {
    this.eventBusService.observe('appTitleChange')
                        .subscribe(title => this.title = title);
  }

}