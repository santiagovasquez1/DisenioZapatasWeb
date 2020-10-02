import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaZapatasComponent } from './lista-zapatas.component';

describe('ListaZapatasComponent', () => {
  let component: ListaZapatasComponent;
  let fixture: ComponentFixture<ListaZapatasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaZapatasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaZapatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
