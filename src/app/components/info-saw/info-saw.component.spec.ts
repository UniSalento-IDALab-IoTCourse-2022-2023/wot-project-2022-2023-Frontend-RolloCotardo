import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSawComponent } from './info-saw.component';

describe('InfoSawComponent', () => {
  let component: InfoSawComponent;
  let fixture: ComponentFixture<InfoSawComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoSawComponent]
    });
    fixture = TestBed.createComponent(InfoSawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
