import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointScoreComponent } from './team-score.component';

describe('PointScoreComponent', () => {
  let component: PointScoreComponent;
  let fixture: ComponentFixture<PointScoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PointScoreComponent]
    });
    fixture = TestBed.createComponent(PointScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
