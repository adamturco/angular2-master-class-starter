import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../models/contact';

@Component({
  templateUrl: 'contacts-editor.component.html'
})

export class ContactsEditorComponent implements OnInit{

    //defaults the contact object so the typescript doesn't error
    contact: Contact = <Contact>{address: {}};

    constructor(private contactsService: ContactsService,
                private route: ActivatedRoute,
                private router: Router){

    }

    ngOnInit(){
        
        this.contactsService.getContact(this.route.snapshot.params['id'])
            .subscribe(contacts => this.contact = contacts); 
    }

    cancel(contact: Contact){
        this.goToDetails(contact);
    }


    save(contact: Contact){
        this.contactsService.updateContact(contact)
            .subscribe(() => this.goToDetails(contact));
    }

    private goToDetails(contact: Contact){
        this.router.navigate(['/contact', contact.id]);
    }
} 