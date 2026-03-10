import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchdocsNav } from './archdocs-nav';

describe('ArchdocsNav', () => {
  let component: ArchdocsNav;
  let fixture: ComponentFixture<ArchdocsNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchdocsNav],
    }).compileComponents();

    fixture = TestBed.createComponent(ArchdocsNav);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
