import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaZapataComponent } from './vista-zapata.component';

describe('VistaZapataComponent', () => {
  let component: VistaZapataComponent;
  let fixture: ComponentFixture<VistaZapataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaZapataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaZapataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
