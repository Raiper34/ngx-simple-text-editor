import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorSeparatorComponent } from './editor-separator.component';

describe('EditorSeparatorComponent', () => {
  let component: EditorSeparatorComponent;
  let fixture: ComponentFixture<EditorSeparatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorSeparatorComponent ]
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
