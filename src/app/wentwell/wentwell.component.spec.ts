import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WentwellComponent } from './wentwell.component';

describe('WentwellComponent', () => {
  let component: WentwellComponent;
  let fixture: ComponentFixture<WentwellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WentwellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WentwellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
