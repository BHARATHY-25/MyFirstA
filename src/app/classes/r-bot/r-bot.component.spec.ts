import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RBotComponent } from './r-bot.component';

describe('RBotComponent', () => {
  let component: RBotComponent;
  let fixture: ComponentFixture<RBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RBotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
