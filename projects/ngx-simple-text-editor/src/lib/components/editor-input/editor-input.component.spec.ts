import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorInputComponent } from './editor-input.component';

describe('EditorInputComponent', () => {
  let component: EditorInputComponent;
  let fixture: ComponentFixture<EditorInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
