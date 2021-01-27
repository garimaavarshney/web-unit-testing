import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Checking that the component actually contains the expected text in the “title” property
  it(`should have as text 'home page'`, waitForAsync(() => {
    // Instance of the app.component, for that we use the create component function of the angular testbed
    // A fixture object that is going to allows us to create an instance of that component
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.text).toEqual('home page');
  }));

});
