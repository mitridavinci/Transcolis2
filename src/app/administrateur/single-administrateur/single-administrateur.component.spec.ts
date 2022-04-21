import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAdministrateurComponent } from './single-administrateur.component';

describe('SingleAdministrateurComponent', () => {
  let component: SingleAdministrateurComponent;
  let fixture: ComponentFixture<SingleAdministrateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleAdministrateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleAdministrateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
