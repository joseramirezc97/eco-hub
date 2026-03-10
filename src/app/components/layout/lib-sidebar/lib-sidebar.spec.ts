import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibSidebar } from './lib-sidebar';

describe('LibSidebar', () => {
  let component: LibSidebar;
  let fixture: ComponentFixture<LibSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibSidebar],
    }).compileComponents();

    fixture = TestBed.createComponent(LibSidebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
