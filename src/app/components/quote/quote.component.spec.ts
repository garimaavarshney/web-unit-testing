import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteComponent } from './quote.component';

describe('QuoteComponent', () => {
  let component: QuoteComponent;
  let fixture: ComponentFixture<QuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuoteComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should render @input`, () => {
    fixture = TestBed.createComponent(QuoteComponent);
    component = fixture.debugElement.componentInstance;
    component.text = 'test quote';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('q').innerText).toEqual('test quote');
  });

});
