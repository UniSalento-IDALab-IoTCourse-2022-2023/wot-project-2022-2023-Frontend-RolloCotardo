import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllInfoComponent } from './all-info.component';

describe('AllInfoComponent', () => {
  let component: AllInfoComponent;
  let fixture: ComponentFixture<AllInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllInfoComponent]
    });
    fixture = TestBed.createComponent(AllInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
