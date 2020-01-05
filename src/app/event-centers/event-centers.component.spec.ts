import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCentersComponent } from './event-centers.component';

describe('EventCentersComponent', () => {
  let component: EventCentersComponent;
  let fixture: ComponentFixture<EventCentersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCentersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
