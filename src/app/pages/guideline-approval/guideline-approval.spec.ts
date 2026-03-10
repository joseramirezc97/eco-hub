import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidelineApproval } from './guideline-approval';

describe('GuidelineApproval', () => {
  let component: GuidelineApproval;
  let fixture: ComponentFixture<GuidelineApproval>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuidelineApproval],
    }).compileComponents();

    fixture = TestBed.createComponent(GuidelineApproval);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
