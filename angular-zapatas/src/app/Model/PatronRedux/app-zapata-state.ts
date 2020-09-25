import { Zapata } from './../zapata';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';

export interface AppZapataState {
  loading: boolean;
}

export function initializeAppZapataState() {
  return {
    loading: false,
  };
}

// Acciones
export enum AppZapatasActionTypes {
  CREAR_ZAPATA = '[App zapata] Crear',
  CHEQUEO_ESFUERZOS = '[App zapata] Esfuerzos',
  CORTANTE_UNIDIRECCIONAL = '[App zapata] CortanteUnidireccional',
  CORTANTE_BIDIRECCIONAL = '[App zapata] CortanteBidireccional',
}

export class CrearZapataAction implements Action {
  type = AppZapatasActionTypes.CREAR_ZAPATA;
  constructor() { }
}

export class ChequeoEsfuerzosAction implements Action {
  type: AppZapatasActionTypes.CHEQUEO_ESFUERZOS;
  constructor(public z: Zapata) { }
}

export class CortanteUnidireccionalAction implements Action {
  type: AppZapatasActionTypes.CORTANTE_UNIDIRECCIONAL;
  constructor(public z: Zapata) { }
}

export class CortanteBidireccionalAction implements Action {
  type: AppZapatasActionTypes.CORTANTE_BIDIRECCIONAL;
  constructor(public z: Zapata) { }
}

export type CrearZapataActions = CrearZapataAction | ChequeoEsfuerzosAction
  | CortanteUnidireccionalAction | CortanteBidireccionalAction;

// REDUCERS
export function reducerAppZapatas(state: AppZapataState, action: CrearZapataActions): AppZapataState {


  return state;
}

// // EFFECTS
// @Injectable()
// export class AppZapataEffects {
//   @Effect()
//   nuevoAgregado$: Observable<Action> = this.actions$.pipe(
//     ofType(AppZapatasActionTypes.CREAR_ZAPATA),
//     map((action: CrearZapataAction) => new ElegidoFavoritoAction(action.destino))
//   );

//   constructor(private actions$: Actions) { }
// }

