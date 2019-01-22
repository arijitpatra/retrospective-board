import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartdoingComponent } from './startdoing.component';

describe('StartdoingComponent', () => {
  let component: StartdoingComponent;
  let fixture: ComponentFixture<StartdoingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartdoingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartdoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
