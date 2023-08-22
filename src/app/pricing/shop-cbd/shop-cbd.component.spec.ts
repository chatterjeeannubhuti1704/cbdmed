import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCBDComponent } from './shop-cbd.component';

describe('ShopCBDComponent', () => {
  let component: ShopCBDComponent;
  let fixture: ComponentFixture<ShopCBDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopCBDComponent]
    });
    fixture = TestBed.createComponent(ShopCBDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
