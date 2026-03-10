import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidelinesLibrary } from './guidelines-library';

describe('GuidelinesLibrary', () => {
  let component: GuidelinesLibrary;
  let fixture: ComponentFixture<GuidelinesLibrary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuidelinesLibrary],
    }).compileComponents();

    fixture = TestBed.createComponent(GuidelinesLibrary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
