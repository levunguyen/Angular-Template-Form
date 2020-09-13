import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormStudentComponent } from './template-form-student.component';

describe('TemplateFormStudentComponent', () => {
  let component: TemplateFormStudentComponent;
  let fixture: ComponentFixture<TemplateFormStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateFormStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFormStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
