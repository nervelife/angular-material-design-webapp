import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactInfo } from 'src/app/model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    sex: new FormControl(''),
    email: new FormControl('')
  });

  constructor( private dialogRef: MatDialogRef<ContactComponent>,
               @Inject( MAT_DIALOG_DATA ) public data: ContactInfo ) {

   }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.warn(this.contactForm.value);
    this.dialogRef.close(this.contactForm.value);
  }

}
