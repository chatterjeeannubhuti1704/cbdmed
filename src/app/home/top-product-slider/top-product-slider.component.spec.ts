import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopProductSliderComponent } from './top-product-slider.component';

describe('TopProductSliderComponent', () => {
  let component: TopProductSliderComponent;
  let fixture: ComponentFixture<TopProductSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopProductSliderComponent]
    });
    fixture = TestBed.createComponent(TopProductSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
