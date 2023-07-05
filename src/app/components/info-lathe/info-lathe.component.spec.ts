import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoLatheComponent } from './info-lathe.component';

describe('InfoLatheComponent', () => {
  let component: InfoLatheComponent;
  let fixture: ComponentFixture<InfoLatheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoLatheComponent]
    });
    fixture = TestBed.createComponent(InfoLatheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
