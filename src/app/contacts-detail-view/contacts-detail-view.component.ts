import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: './contacts-detail-view.component.html',
  styleUrls: ['./contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit {

  public contact: Contact;
  

  constructor(private router: Router,
              private route: ActivatedRoute,
              private contactsService: ContactsService
              ) 
  { }

  ngOnInit() {
      this.contactsService.getContact(this.route.snapshot.params['id'])
          .subscribe(contacts => {
            this.contact = contacts;
          })
          ;     
  }

  navigateToEditor(event){
    this.router.navigate(['/contact', this.contact.id, 'edit']);
  }

  navigateToList(){
    this.router.navigate(['/']);
  }
}
