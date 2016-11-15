import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts: Observable<Contact[]>;
  private terms$ = new Subject<string>();

  constructor(
    private contactsService: ContactsService){
    
  }

  ngOnInit(){

    this.contacts = this.contactsService.getContacts();
    
    this.terms$.debounceTime(400)
               .distinctUntilChanged()
               .subscribe(term => this.searchInput(term));    
  }

  searchInput(value){
    this.contacts = this.contactsService.search(value);
  }
}
