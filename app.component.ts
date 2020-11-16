import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
  showFormError = true;
  constructor(private toastr: ToastrService,private dialog: MatDialog){
  }
  countryList: string[] = ['Canada', 'US', 'India', 'China'];
  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public zip = [/\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/];
form= new FormGroup({
  firstName: new FormControl('Aarthi',Validators.required),
  lastName: new FormControl('Thasvanth', Validators.required),
  publishName: new FormControl('Patrick nhub', [Validators.required]),
  city: new FormControl('CIBC'),
  company: new FormControl('HONGKONG'),
  status: new FormControl('active',Validators.required),
  email: new FormControl('partick@gmail.com',[Validators.required, Validators.email]),
  country: new FormControl('',Validators.required),
  position: new FormControl(''),
  address: new FormControl(''),
  guestAuthor: new FormControl(''),
  phone: new FormControl('',[Validators.required]),
  fax: new FormControl(''),
  province: new FormControl(''),
  zipCode: new FormControl(''),
  authorCat: new FormControl(''),

})
  save(){
    if (this.form.invalid) {
      this.showFormError = true;
      this.toastr.error('Please fill all required fields');
      this.form.markAllAsTouched();
      return;
    }
    else{
      this.toastr.success('form submitted');
    }
  }
  reset(){
    this.showFormError = false;

    this.form.reset();
  }
  
  

}
