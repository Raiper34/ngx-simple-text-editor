import {DomModifyDirective} from './dom-modify.directive';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';

const DELAY = 1000;

@Component({
  selector: 'st-test-component',
  template: `
    <div id="container" (stDomModify)="domModify()">
      <div id="div-1" class="div">Div one</div>
      @if (isDiv2Showed) {
        <div id="div-2" class="div"></div>
      }
    </div>
  `,
  standalone: false
})
class TestComponent {

  isDiv2Showed = false;

  domModify(): void {
  }
}

describe('DomModifyDirective', () => {

  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DomModifyDirective, TestComponent],
    });
    TestBed.compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = new DomModifyDirective(null);
    expect(directive).toBeTruthy();
  });

  it(`dom should be modified after ${DELAY} ms`, (done) => {
    fixture.componentInstance.domModify = jasmine.createSpy('domModify');
    expect(fixture.debugElement.queryAll(By.css('.div')).length).toBe(1);

    fixture.componentInstance.isDiv2Showed = true;
    fixture.detectChanges();

    expect(fixture.debugElement.queryAll(By.css('.div')).length).toBe(2);
    expect(fixture.debugElement.queryAll(By.css('#div-2')).length).toBeTruthy();
    setTimeout(() => {
      expect(fixture.componentInstance.domModify).toHaveBeenCalled();
      done();
    });
  });
});
