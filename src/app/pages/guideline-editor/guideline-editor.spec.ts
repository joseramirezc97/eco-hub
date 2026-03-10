import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidelineEditor } from './guideline-editor';

describe('GuidelineEditor', () => {
  let component: GuidelineEditor;
  let fixture: ComponentFixture<GuidelineEditor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuidelineEditor],
    }).compileComponents();

    fixture = TestBed.createComponent(GuidelineEditor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
