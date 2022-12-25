import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeAddComponent implements OnInit {

  @ViewChild('tabGroup') tabGroup;

  tabs: any[] = [
    { title: 'TAB-ONE', label: 'first', active: true },
    { title: 'TAB-TWO', label: 'second', active: false },
  ];
  selected = new FormControl(0);

  constructor() { }

  ngOnInit(): void {
  }

  selectTab(selectedIndex) {
    // if (selectedIndex == 1) {
    //   this.tabs[0].active = false;
    // }
    this.tabs.map(m => {
      m.active = false;
    })
    this.tabs[selectedIndex].active = true;
  }

}
