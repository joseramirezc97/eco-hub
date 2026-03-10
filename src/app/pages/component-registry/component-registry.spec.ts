import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentRegistry } from './component-registry';

describe('ComponentRegistry', () => {
  let component: ComponentRegistry;
  let fixture: ComponentFixture<ComponentRegistry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentRegistry],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentRegistry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
