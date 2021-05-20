import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FYFComponent } from './fyf.component';

describe('FYFComponent', () => {
  let component: FYFComponent;
  let fixture: ComponentFixture<FYFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FYFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FYFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
