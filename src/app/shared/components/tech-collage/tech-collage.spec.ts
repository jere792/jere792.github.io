import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechCollage } from './tech-collage';

describe('TechCollage', () => {
  let component: TechCollage;
  let fixture: ComponentFixture<TechCollage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechCollage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechCollage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
