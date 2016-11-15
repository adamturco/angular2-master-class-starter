import { Injectable } from '@angular/core';
import { CONTACT_DATA } from './data/contact-data';
import { Http } from '@angular/http';
import { Contact } from './models/contact';

@Injectable()
export class ContactsService {

  public API_ENDPOINT = "http://localhost:4201/api";

  constructor(private http: Http) { }

    getContacts() {
        //return CONTACT_DATA;

        return this.http.get(this.API_ENDPOINT + '/contacts')
            .map(res => res.json().items);
    } 

    getContact(id: string){
        
        return this.http.get(this.API_ENDPOINT + '/contacts/' + id)
            .map(res => res.json().item);
    }   

    updateContact(contact: Contact){
        return this.http.put(`http://localhost:4201/api/contacts/${contact.id}`, contact);        
    }

    search(term: string){
        console.log('term: ', term);
        return this.http.get(`http://localhost:4201/api/search?text=${term}`)
            .map(res => res.json().items);        
    }
}
