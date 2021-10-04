import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingtbComponent } from './routingtb.component';

describe('RoutingtbComponent', () => {
  let component: RoutingtbComponent;
  let fixture: ComponentFixture<RoutingtbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingtbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingtbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
