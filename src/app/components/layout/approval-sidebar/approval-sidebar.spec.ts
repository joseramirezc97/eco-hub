import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalSidebar } from './approval-sidebar';

describe('ApprovalSidebar', () => {
  let component: ApprovalSidebar;
  let fixture: ComponentFixture<ApprovalSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApprovalSidebar],
    }).compileComponents();

    fixture = TestBed.createComponent(ApprovalSidebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
