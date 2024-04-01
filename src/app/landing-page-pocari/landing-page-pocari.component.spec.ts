import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPagePocariComponent } from './landing-page-pocari.component';

describe('LandingPagePocariComponent', () => {
  let component: LandingPagePocariComponent;
  let fixture: ComponentFixture<LandingPagePocariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPagePocariComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPagePocariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
