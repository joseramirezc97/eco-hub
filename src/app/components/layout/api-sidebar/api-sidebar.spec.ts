import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiSidebar } from './api-sidebar';

describe('ApiSidebar', () => {
  let component: ApiSidebar;
  let fixture: ComponentFixture<ApiSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiSidebar],
    }).compileComponents();

    fixture = TestBed.createComponent(ApiSidebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
