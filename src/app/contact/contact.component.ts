import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { createInvalidDomainValidator } from './invalidEmailDomain';

const invalidEmailDomain = createInvalidDomainValidator(['gmail.com', 'yahoo.com', 'hotmail.com'])

@Component({
  selector: 'app-contact',
  imports: [ ReactiveFormsModule,
    CommonModule

   ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  @Input() name!: string;

  contactForm = new FormGroup({
    senderName:  new FormControl('', Validators.required),
    senderEmail: new FormControl('', [Validators.required, Validators.email, invalidEmailDomain]),
    senderMessage:  new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  

  submitForm() {
    // clear eveyrthing
    // then give a messge saying successfully sent
  }

}
