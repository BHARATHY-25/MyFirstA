import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RTopComponent } from './r-top.component';

describe('RTopComponent', () => {
  let component: RTopComponent;
  let fixture: ComponentFixture<RTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
