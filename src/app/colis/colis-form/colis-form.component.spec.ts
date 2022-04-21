import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColisFormComponent } from './colis-form.component';

describe('ColisFormComponent', () => {
  let component: ColisFormComponent;
  let fixture: ComponentFixture<ColisFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColisFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColisFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
