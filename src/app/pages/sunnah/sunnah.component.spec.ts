import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SunnahComponent } from './sunnah.component';

describe('SunnahComponent', () => {
  let component: SunnahComponent;
  let fixture: ComponentFixture<SunnahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SunnahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SunnahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
