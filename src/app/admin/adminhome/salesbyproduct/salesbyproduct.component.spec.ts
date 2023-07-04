import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesbyproductComponent } from './salesbyproduct.component';

describe('SalesbyproductComponent', () => {
  let component: SalesbyproductComponent;
  let fixture: ComponentFixture<SalesbyproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesbyproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesbyproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
