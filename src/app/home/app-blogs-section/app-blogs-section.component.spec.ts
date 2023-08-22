import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBlogsSectionComponent } from './app-blogs-section.component';

describe('AppBlogsSectionComponent', () => {
  let component: AppBlogsSectionComponent;
  let fixture: ComponentFixture<AppBlogsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppBlogsSectionComponent]
    });
    fixture = TestBed.createComponent(AppBlogsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
