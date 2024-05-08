import { Injectable } from '@angular/core';
import { SignalSimpleStoreService } from './signal-simple-store.service';
import { Appartment } from '../Models/Appartment.model';

@Injectable({
  providedIn: 'root'
})
export class AppartmentSignalStateService extends SignalSimpleStoreService<Appartment>{

  constructor() { 
    super()
  }
}
