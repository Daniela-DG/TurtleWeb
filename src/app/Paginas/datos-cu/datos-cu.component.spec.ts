import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosCuComponent } from './datos-cu.component';

describe('DatosCuComponent', () => {
  let component: DatosCuComponent;
  let fixture: ComponentFixture<DatosCuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosCuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosCuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
