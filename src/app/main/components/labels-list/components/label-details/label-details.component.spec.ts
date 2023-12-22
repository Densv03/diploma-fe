import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelDetailsComponent } from './label-details.component';

describe('LabelDetailsComponent', () => {
  let component: LabelDetailsComponent;
  let fixture: ComponentFixture<LabelDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabelDetailsComponent]
    });
    fixture = TestBed.createComponent(LabelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
