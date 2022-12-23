import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-first-tab',
  templateUrl: './first-tab.component.html',
  styleUrls: ['./first-tab.component.scss']
})
export class FirstTabComponent implements OnInit {

  firstForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.firstForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required]
    })
  }

}
