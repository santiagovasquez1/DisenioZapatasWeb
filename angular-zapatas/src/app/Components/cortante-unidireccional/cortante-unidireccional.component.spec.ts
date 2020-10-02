import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CortanteUnidireccionalComponent } from './cortante-unidireccional.component';

describe('CortanteUnidireccionalComponent', () => {
  let component: CortanteUnidireccionalComponent;
  let fixture: ComponentFixture<CortanteUnidireccionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CortanteUnidireccionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CortanteUnidireccionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
