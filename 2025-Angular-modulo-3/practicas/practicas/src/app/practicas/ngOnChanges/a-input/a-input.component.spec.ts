import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AInputComponent } from './a-input.component';

describe('AInputComponent', () => {
  let component: AInputComponent;
  let fixture: ComponentFixture<AInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
