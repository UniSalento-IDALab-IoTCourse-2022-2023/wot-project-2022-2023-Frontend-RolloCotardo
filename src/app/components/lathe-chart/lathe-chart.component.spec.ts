import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatheChartComponent } from './lathe-chart.component';

describe('LatheChartComponent', () => {
  let component: LatheChartComponent;
  let fixture: ComponentFixture<LatheChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatheChartComponent]
    });
    fixture = TestBed.createComponent(LatheChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
