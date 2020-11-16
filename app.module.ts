import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import '@angular/platform-browser';
import '@angular/compiler';
import '@angular/platform-browser-dynamic';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ToastrModule } from 'ngx-toastr';
import {MatSelectModule} from '@angular/material/select';
import {MatRippleModule} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import { TextMaskModule } from 'angular2-text-mask';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,MatSelectModule,CommonModule,MatToolbarModule,MatRippleModule,MatDialogModule,
    AppRoutingModule,MatFormFieldModule,MatInputModule,MatCheckboxModule,MatButtonModule,TextMaskModule,
    NgbModule,BrowserAnimationsModule,MatRadioModule,FormsModule,ReactiveFormsModule,ToastrModule.forRoot({ preventDuplicates: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
