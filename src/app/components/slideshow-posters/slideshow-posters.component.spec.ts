import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideshowPostersComponent } from './slideshow-posters.component';

describe('SlideshowPostersComponent', () => {
  let component: SlideshowPostersComponent;
  let fixture: ComponentFixture<SlideshowPostersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideshowPostersComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideshowPostersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
