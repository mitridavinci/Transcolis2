import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisseurFormComponent } from './regisseur-form.component';

describe('RegisseurFormComponent', () => {
  let component: RegisseurFormComponent;
  let fixture: ComponentFixture<RegisseurFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisseurFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisseurFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
