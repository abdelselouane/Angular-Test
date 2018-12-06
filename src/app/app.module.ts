import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatButtonModule, 
  MatTableModule, 
  MatDialogModule 
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http'; 
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AppRoutingModule } from './routing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from './components/user-form/user-form.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { UnlessDirective } from './directives/unless/unless.directive';
import { ChildComponent } from './components/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    HeaderComponent,
    UsersListComponent,
    DialogComponent,
    HighlightDirective,
    UnlessDirective,
    ChildComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
