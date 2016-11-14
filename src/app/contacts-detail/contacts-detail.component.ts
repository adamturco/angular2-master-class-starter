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
              private contactsService: ContactsService) {
  }

  ngOnInit() {

      this.contactsService.getContact(this.route.snapshot.params['id'])
          .subscribe(contacts => this.contact = contacts); 

    //this.contact = this.contactsService.getContact(this.route.snapshot.params['id']);
  }

}