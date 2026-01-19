import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateBanking } from './corporate-banking';

describe('CorporateBanking', () => {
  let component: CorporateBanking;
  let fixture: ComponentFixture<CorporateBanking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorporateBanking]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorporateBanking);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
