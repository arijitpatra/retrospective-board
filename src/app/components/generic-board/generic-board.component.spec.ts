import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericBoardComponent } from './generic-board.component';

describe('GenericBoardComponent', () => {
  let component: GenericBoardComponent;
  let fixture: ComponentFixture<GenericBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
