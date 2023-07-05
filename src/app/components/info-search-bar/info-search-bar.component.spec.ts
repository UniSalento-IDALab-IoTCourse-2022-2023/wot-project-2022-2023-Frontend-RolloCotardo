import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSearchBarComponent } from './info-search-bar.component';

describe('InfoSearchBarComponent', () => {
  let component: InfoSearchBarComponent;
  let fixture: ComponentFixture<InfoSearchBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoSearchBarComponent]
    });
    fixture = TestBed.createComponent(InfoSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
