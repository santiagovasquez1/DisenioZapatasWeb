import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CortanteBidireccionalComponent } from './cortante-bidireccional.component';

describe('CortanteBidireccionalComponent', () => {
  let component: CortanteBidireccionalComponent;
  let fixture: ComponentFixture<CortanteBidireccionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CortanteBidireccionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CortanteBidireccionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
