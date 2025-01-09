import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorSeparatorComponent } from './editor-separator.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('EditorSeparatorComponent', () => {
  let component: EditorSeparatorComponent;
  let fixture: ComponentFixture<EditorSeparatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorSeparatorComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorSeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
