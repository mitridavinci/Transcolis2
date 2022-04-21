import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrateurFormComponent } from './administrateur-form.component';

describe('AdministrateurFormComponent', () => {
  let component: AdministrateurFormComponent;
  let fixture: ComponentFixture<AdministrateurFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrateurFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrateurFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
