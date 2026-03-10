import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchdocsAi } from './archdocs-ai';

describe('ArchdocsAi', () => {
  let component: ArchdocsAi;
  let fixture: ComponentFixture<ArchdocsAi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchdocsAi],
    }).compileComponents();

    fixture = TestBed.createComponent(ArchdocsAi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
