import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitializeRepository } from './initialize-repository';

describe('InitializeRepository', () => {
  let component: InitializeRepository;
  let fixture: ComponentFixture<InitializeRepository>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitializeRepository],
    }).compileComponents();

    fixture = TestBed.createComponent(InitializeRepository);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
