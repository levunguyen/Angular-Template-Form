import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-form-student',
  templateUrl: './template-form-student.component.html',
  styleUrls: ['./template-form-student.component.css']
})
export class TemplateFormStudentComponent implements OnInit {
  student = {
    studentCode: 'SV-005',
    studentName: 'Nguyễn Văn D',
    studentAddress: 'Hà Nội'
  };
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(createStudentForm: NgForm) {
    // console.log(createStudentForm.value);
    console.log(this.student);
  }
}
