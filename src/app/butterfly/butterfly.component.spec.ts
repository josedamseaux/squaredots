import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ButterflyComponent } from './butterfly.component';

describe('ButterflyComponent', () => {
  let component: ButterflyComponent;
  let fixture: ComponentFixture<ButterflyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ButterflyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButterflyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
