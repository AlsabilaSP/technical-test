import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Employee } from '../dummy';
import { dataTable } from '../dummy';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @ViewChild('dt') dt!: Table;
  cols = [
    { header: 'Username', field: 'username' },
    { header: 'First Name', field: 'firstName' },
    { header: 'Last Name', field: 'lastName' },
    { header: 'Email', field: 'email' },
    { header: 'Birth Date', field: 'birthDate' },
    { header: 'Basic Salary', field: 'basicSalary' },
    { header: 'Group', field: 'group' },
    { header: 'Description', field: 'description' },
  ]
  employees: Employee[] = dataTable;
  options = [5,10,20,25,50];
  editableEmp: Employee = {};
  index = 0;
  display: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  applyFilterGlobal($event: any) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }

  onDisplay(emp: Employee) {
    this.editableEmp = {
      username: emp.username,
      firstName: emp.firstName,
      lastName: emp.lastName,
      email: emp.email,
      birthDate: emp.birthDate,
      basicSalary: emp.basicSalary,
      group: emp.group,
      description: emp.description
    };
    this.index = this.employees.indexOf(emp);
    this.display = true;
  }

  onEdit() {
    this.employees[this.index] = this.editableEmp;
    this.display = false;
  }

  onDelete(emp: Employee) {
    this.employees = this.employees.filter(item => item != emp);
  }

  onAdd() {
    
  }

}
