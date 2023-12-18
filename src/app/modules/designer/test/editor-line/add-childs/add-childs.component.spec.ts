import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChildsComponent } from './add-childs.component';

describe('AddChildsComponent', () => {
  let component: AddChildsComponent;
  let fixture: ComponentFixture<AddChildsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddChildsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddChildsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
