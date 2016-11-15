import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-detail',
  templateUrl: './contacts-detail.component.html'
})

export class ContactsDetailComponent implements OnInit{
    
  @Input() contact: Contact;  
  @Output() edit = new EventEmitter<Contact>();
  @Output() back = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {

  }

}