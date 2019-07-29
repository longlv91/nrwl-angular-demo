import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursiveMenuComponent } from './recursive-menu.component';

describe('RecursiveMenuComponent', () => {
  let component: RecursiveMenuComponent;
  let fixture: ComponentFixture<RecursiveMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecursiveMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursiveMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
