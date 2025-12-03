import { ComponentFixture, TestBed } from '@angular/core/testing';

import { sighnupComponent } from './sighnup';

describe('LoginComponent', () => {
  let component: sighnupComponent;
  let fixture: ComponentFixture<sighnupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [sighnupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(sighnupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
