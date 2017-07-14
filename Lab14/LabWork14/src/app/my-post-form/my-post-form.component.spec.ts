import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPostFormComponent } from './my-post-form.component';

describe('MyPostFormComponent', () => {
  let component: MyPostFormComponent;
  let fixture: ComponentFixture<MyPostFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPostFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
