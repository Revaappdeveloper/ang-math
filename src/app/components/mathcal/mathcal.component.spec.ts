import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathcalComponent } from './mathcal.component';

describe('MathcalComponent', () => {
  let component: MathcalComponent;
  let fixture: ComponentFixture<MathcalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathcalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathcalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
