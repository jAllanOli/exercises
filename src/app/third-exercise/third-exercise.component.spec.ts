import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdExerciseComponent } from './third-exercise.component';

describe('ThirdExerciseComponent', () => {
  let component: ThirdExerciseComponent;
  let fixture: ComponentFixture<ThirdExerciseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThirdExerciseComponent]
    });
    fixture = TestBed.createComponent(ThirdExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
