import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SawChartComponent } from './saw-chart.component';

describe('SawChartComponent', () => {
  let component: SawChartComponent;
  let fixture: ComponentFixture<SawChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SawChartComponent]
    });
    fixture = TestBed.createComponent(SawChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
