import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalComments } from './approval-comments';

describe('ApprovalComments', () => {
  let component: ApprovalComments;
  let fixture: ComponentFixture<ApprovalComments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApprovalComments],
    }).compileComponents();

    fixture = TestBed.createComponent(ApprovalComments);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
