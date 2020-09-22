import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsfuerzoZapataComponent } from './esfuerzo-zapata.component';

describe('EsfuerzoZapataComponent', () => {
  let component: EsfuerzoZapataComponent;
  let fixture: ComponentFixture<EsfuerzoZapataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsfuerzoZapataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsfuerzoZapataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
