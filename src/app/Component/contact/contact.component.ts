import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule,NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  userName = '';
  userAge = '';
  userEmail = '';
  userPassword = '';

}
