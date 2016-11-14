import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-detail.component.html'
})

export class ContactsDetailComponent implements OnInit{
    
  public contact: Contact;  
  constructor(private route: ActivatedRoute,
              private contactsService: ContactsService) {}

  ngOnInit() {
    
    let id = this.route.snapshot.params['id'];
    this.contact = this.contactsService.getContact(id);
  }

}