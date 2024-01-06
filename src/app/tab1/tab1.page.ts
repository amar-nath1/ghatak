import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountsService } from '../shared/services/accounts/accounts.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  signupForm: FormGroup;

  // Define arrays for caste, gotra, districts, villages, states, cities, education qualifications, and occupations.
  genderOptions = ['Male', 'Female'];
  casteOptions = ['Brahmin', 'Kshatriya', 'Vaishya', 'Shudra', 'Others'];
  gotraOptions = ['Gotra1', 'Gotra2', 'Gotra3'];
  districtOptions = ['Patna', 'Gaya', 'Muzaffarpur'];
  villageOptions = ['Village1', 'Village2', 'Village3'];
  stateOptions = ['Bihar', 'Jharkhand', 'Uttar Pradesh'];
  cityOptions = ['Patna', 'Ranchi', 'Lucknow'];
  educationOptions = ['High School', 'Intermediate', 'Graduate', 'Post Graduate', 'Ph.D.'];
  occupationOptions = ['Engineer', 'Doctor', 'Teacher', 'Business', 'Others'];

  constructor(private accountService: AccountsService, private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      gender: ['male', Validators.required],
      dateOfBirth: [new Date().toISOString(), Validators.required],
      mobileNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      guardianFullName: ['', Validators.required],
      caste: ['', Validators.required],
      gotra: ['', Validators.required],
      district: ['', Validators.required],
      village: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      education: ['', Validators.required],
      occupation: ['', Validators.required],
      referencePersonName: ['', Validators.required],
      referencePersonNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    });
  }

  // Implement form submission logic here
  onSubmit() {
    if (this.signupForm.valid) {
      // Handle form submission, e.g., send data to the server
      console.log(this.signupForm.value);
      this.accountService.postProfile(this.signupForm.value)
    } else {
      // Form is not valid, show error messages or handle as needed
    }
  }

}
