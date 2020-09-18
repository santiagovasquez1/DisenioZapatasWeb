import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZapataComponent } from './zapata.component';

describe('ZapataComponent', () => {
  let component: ZapataComponent;
  let fixture: ComponentFixture<ZapataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZapataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZapataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
