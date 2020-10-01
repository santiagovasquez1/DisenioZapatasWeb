import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DespieceZapataComponent } from './despiece-zapata.component';

describe('DespieceZapataComponent', () => {
  let component: DespieceZapataComponent;
  let fixture: ComponentFixture<DespieceZapataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DespieceZapataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DespieceZapataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
