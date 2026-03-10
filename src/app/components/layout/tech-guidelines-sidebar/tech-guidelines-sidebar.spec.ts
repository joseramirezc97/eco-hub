import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechGuidelinesSidebar } from './tech-guidelines-sidebar';

describe('TechGuidelinesSidebar', () => {
  let component: TechGuidelinesSidebar;
  let fixture: ComponentFixture<TechGuidelinesSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechGuidelinesSidebar],
    }).compileComponents();

    fixture = TestBed.createComponent(TechGuidelinesSidebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
