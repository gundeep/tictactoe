import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooardComponent } from './booard.component';

describe('BooardComponent', () => {
  let component: BooardComponent;
  let fixture: ComponentFixture<BooardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
