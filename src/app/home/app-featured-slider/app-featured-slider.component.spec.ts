import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFeaturedSliderComponent } from './app-featured-slider.component';

describe('AppFeaturedSliderComponent', () => {
  let component: AppFeaturedSliderComponent;
  let fixture: ComponentFixture<AppFeaturedSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppFeaturedSliderComponent]
    });
    fixture = TestBed.createComponent(AppFeaturedSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
