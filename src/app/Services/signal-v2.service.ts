import { HttpClient } from '@angular/common/http';
import { Injectable, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Appartment } from '../Models/Appartment.model';
import { AppartmentSignalStateService } from './appartment-signal-state.service';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignalV2Service {

  constructor(private http: HttpClient, private appartService: AppartmentSignalStateService) { }

  // getAppartments(): Signal<Appartment[]> {
  //   const observable = this.http.get<Appartment[]>('http://localhost:4242/appartments')
  //     return toSignal(observable, {initialValue: []})
    
  // }


  /****FIXME : créer un service pour les signals tableaux */
  // getAppartments(): void {
  //   this.http.get<Appartment[]>('http://localhost:4242/appartments').pipe(
  //     tap(data => this.appartService.set(data))
  //   )
  // }
}
