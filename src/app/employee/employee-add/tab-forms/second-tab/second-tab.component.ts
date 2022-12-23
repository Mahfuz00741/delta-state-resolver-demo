import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-second-tab',
  templateUrl: './second-tab.component.html',
  styleUrls: ['./second-tab.component.scss']
})
export class SecondTabComponent implements OnInit {
  secondForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
