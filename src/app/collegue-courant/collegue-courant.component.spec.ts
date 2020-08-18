import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegueCourantComponent } from './collegue-courant.component';

describe('CollegueCourantComponent', () => {
  let component: CollegueCourantComponent;
  let fixture: ComponentFixture<CollegueCourantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegueCourantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegueCourantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
