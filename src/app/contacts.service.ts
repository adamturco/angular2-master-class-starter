import { Injectable } from '@angular/core';
import { CONTACT_DATA } from './data/contact-data';
import { Http } from '@angular/http';

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
    //return this.getContacts().find(contact => contact.id.toString() === id);
    
    return this.http.get(this.API_ENDPOINT + '/contacts/' + id)
        .map(res => res.json())
        .map(data => data.item);
    } 

}
