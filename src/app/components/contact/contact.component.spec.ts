import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as text 'contact page'`, waitForAsync(() => {
    expect(component.text).toEqual('contact page');
  }));

  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });

  it('should create a `FormGroup`', () => {
    expect(component.contactForm instanceof FormGroup).toBe(true);
  });

  it(`should set submitted to true`, waitForAsync(() => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  }));

  // it(`should call the onSubmit method`, waitForAsync(() => {
  //   spyOn(component, 'onSubmit');
  //   el = fixture.debugElement.query(By.css('button')).nativeElement;
  //   el.click();
  //   expect(component.onSubmit).toHaveBeenCalled();
  // }));

  it(`form should be invalid`, waitForAsync(() => {
    component.contactForm.controls['email'].setValue('');
    component.contactForm.controls['name'].setValue('');
    component.contactForm.controls['text'].setValue('');
    expect(component.contactForm.valid).toBeFalsy();
  }));

  it(`form should be valid`, waitForAsync(() => {
    component.contactForm.controls['email'].setValue('asd@asd.com');
    component.contactForm.controls['name'].setValue('aada');
    component.contactForm.controls['text'].setValue('text');
    expect(component.contactForm.valid).toBeTruthy();
  }));

});
