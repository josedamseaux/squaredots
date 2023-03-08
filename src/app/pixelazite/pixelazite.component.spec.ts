import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PixelaziteComponent } from './pixelazite.component';

describe('PixelaziteComponent', () => {
  let component: PixelaziteComponent;
  let fixture: ComponentFixture<PixelaziteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PixelaziteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PixelaziteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
