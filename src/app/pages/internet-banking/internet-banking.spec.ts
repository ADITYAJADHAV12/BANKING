import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetBanking } from './internet-banking';

describe('InternetBanking', () => {
  let component: InternetBanking;
  let fixture: ComponentFixture<InternetBanking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternetBanking]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternetBanking);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
