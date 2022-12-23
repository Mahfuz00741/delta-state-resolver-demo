import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeAddComponent implements OnInit {

  tabs: any[] = [
    { title: 'Basic Information', content: 'basicInformation', initiated: true, active: true },
    { title: 'Skill Information', content: 'skillInformation', initiated: false },
    { title: 'View Information', content: 'viewInformation', initiated: false },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(tab:any){
    tab.initiated = true;
  }

}
