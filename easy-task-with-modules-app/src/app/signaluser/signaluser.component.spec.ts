import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignaluserComponent } from './signaluser.component';

describe('SignaluserComponent', () => {
  let component: SignaluserComponent;
  let fixture: ComponentFixture<SignaluserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignaluserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignaluserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
