import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorSelectComponent } from './editor-select.component';

describe('EditorSelectComponent', () => {
  let component: EditorSelectComponent;
  let fixture: ComponentFixture<EditorSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
