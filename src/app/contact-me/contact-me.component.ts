import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { ServicesService } from '../contact.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent /*implements OnInit*/ {
  /* FormData: FormGroup;
  constructor(private builder: FormBuilder, private contact: ServicesService) { }

  ngOnInit() {
    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Comment: new FormControl('', [Validators.required])
    }); */
    formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  
    constructor(private serviceService: ServicesService) { }
  
    submitForm() {
      this.serviceService.sendEmail(this.formData).subscribe(
        response => {
          alert('Message sent successfully');
          this.resetForm();
        },
        error => {
          console.error('Error sending message:', error.message);
          alert(error.message + ' Failed to send message. Please try again later.');
        }
      );
    }
  
    resetForm() {
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    }
  }

 /*  onSubmit(FormData) {
    console.log(FormData)
    this.contact.PostMessage(FormData)
      .subscribe(response => {
        location.href = 'https://mailthis.to/confirm'
        console.log(response)
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      })
  }
} */
