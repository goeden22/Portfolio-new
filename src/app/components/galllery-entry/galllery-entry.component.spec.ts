import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallleryEntryComponent } from './galllery-entry.component';

describe('GallleryEntryComponent', () => {
  let component: GallleryEntryComponent;
  let fixture: ComponentFixture<GallleryEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallleryEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallleryEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
