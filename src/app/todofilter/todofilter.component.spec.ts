import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodofilterComponent } from './todofilter.component';

describe('TodofilterComponent', () => {
  let component: TodofilterComponent;
  let fixture: ComponentFixture<TodofilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodofilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodofilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
