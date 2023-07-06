import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmsSearchBarComponent } from './alarms-search-bar.component';

describe('AlarmsSearchBarComponent', () => {
  let component: AlarmsSearchBarComponent;
  let fixture: ComponentFixture<AlarmsSearchBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlarmsSearchBarComponent]
    });
    fixture = TestBed.createComponent(AlarmsSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
