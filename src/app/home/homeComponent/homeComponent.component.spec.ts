import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponentComponent } from './homeComponent.component';

describe('HomeComponent', () => {
  let component: HomeComponentComponent;
  let fixture: ComponentFixture<HomeComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponentComponent]
    });
    fixture = TestBed.createComponent(HomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
