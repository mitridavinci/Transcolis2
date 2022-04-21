import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRegisseurComponent } from './single-regisseur.component';

describe('SingleRegisseurComponent', () => {
  let component: SingleRegisseurComponent;
  let fixture: ComponentFixture<SingleRegisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleRegisseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleRegisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
