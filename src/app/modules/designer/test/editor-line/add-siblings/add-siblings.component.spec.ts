import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSiblingsComponent } from './add-siblings.component';

describe('AddSiblingsComponent', () => {
  let component: AddSiblingsComponent;
  let fixture: ComponentFixture<AddSiblingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddSiblingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddSiblingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
