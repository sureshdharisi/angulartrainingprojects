import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestimentResultsComponent } from './investiment-results.component';

describe('InvestimentResultsComponent', () => {
  let component: InvestimentResultsComponent;
  let fixture: ComponentFixture<InvestimentResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestimentResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestimentResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
