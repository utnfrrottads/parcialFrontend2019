import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  public form: FormGroup;

  constructor() {

    this.form = new FormGroup(
      {
        name: new FormControl(''),
        email: new FormControl('',)
      }
    )
  }

  ngOnInit() {
  }

  onFormSubmitted() {
    console.log(this.form.value);
  }
}
