import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorLineComponent } from './editor-line.component';

describe('EditorLineComponent', () => {
  let component: EditorLineComponent;
  let fixture: ComponentFixture<EditorLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditorLineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditorLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
