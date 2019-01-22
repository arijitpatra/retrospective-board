import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TobeimprovedComponent } from './tobeimproved.component';

describe('TobeimprovedComponent', () => {
  let component: TobeimprovedComponent;
  let fixture: ComponentFixture<TobeimprovedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TobeimprovedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TobeimprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
