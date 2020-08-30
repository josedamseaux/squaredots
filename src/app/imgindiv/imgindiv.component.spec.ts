import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgindivComponent } from './imgindiv.component';

describe('ImgindivComponent', () => {
  let component: ImgindivComponent;
  let fixture: ComponentFixture<ImgindivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgindivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgindivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
