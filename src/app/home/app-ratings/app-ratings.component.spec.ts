import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRatingsComponent } from './app-ratings.component';

describe('AppRatingsComponent', () => {
  let component: AppRatingsComponent;
  let fixture: ComponentFixture<AppRatingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppRatingsComponent]
    });
    fixture = TestBed.createComponent(AppRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
