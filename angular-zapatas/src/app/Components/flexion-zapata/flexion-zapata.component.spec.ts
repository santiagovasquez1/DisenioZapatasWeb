import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexionZapataComponent } from './flexion-zapata.component';

describe('FlexionZapataComponent', () => {
  let component: FlexionZapataComponent;
  let fixture: ComponentFixture<FlexionZapataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexionZapataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexionZapataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
