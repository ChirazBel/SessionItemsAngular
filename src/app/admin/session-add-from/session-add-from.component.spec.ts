import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionAddFromComponent } from './session-add-from.component';

describe('SessionAddFromComponent', () => {
  let component: SessionAddFromComponent;
  let fixture: ComponentFixture<SessionAddFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionAddFromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionAddFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
