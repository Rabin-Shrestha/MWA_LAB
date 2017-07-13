import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyListCompComponent } from './my-list-comp.component';

describe('MyListCompComponent', () => {
  let component: MyListCompComponent;
  let fixture: ComponentFixture<MyListCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyListCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyListCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
