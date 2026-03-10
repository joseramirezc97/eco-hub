import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalGuidelines } from './technical-guidelines';

describe('TechnicalGuidelines', () => {
  let component: TechnicalGuidelines;
  let fixture: ComponentFixture<TechnicalGuidelines>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicalGuidelines],
    }).compileComponents();

    fixture = TestBed.createComponent(TechnicalGuidelines);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
