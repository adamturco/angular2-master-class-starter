import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContactsAppComponent } from './contacts.component';
import { ContactsHeaderComponent } from './contacts-header/contacts-header.component';
import { ContactsService } from './contacts.service';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { RouterModule } from '@angular/router';
import { ContactsAppRoutes } from './app.routes';

@NgModule({
  declarations: [ContactsAppComponent, ContactsHeaderComponent, ContactsListComponent, ContactsDetailComponent],
  imports: [BrowserModule, RouterModule.forRoot(ContactsAppRoutes)],
  bootstrap: [ContactsAppComponent],
  providers: [ContactsService]
})
export class ContactsModule {

}
