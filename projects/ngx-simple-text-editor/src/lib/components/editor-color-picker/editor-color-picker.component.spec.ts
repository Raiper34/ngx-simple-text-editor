import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorColorPickerComponent } from './editor-color-picker.component';

describe('EditorColorPickerComponent', () => {
  let component: EditorColorPickerComponent;
  let fixture: ComponentFixture<EditorColorPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorColorPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should convert rgb to hex', () => {
    const rgb = 'rgb(255,255,255)';
    const hex = component.rgbStringToHex(rgb);
    expect(hex).toBe('#ffffff');
  });
});
