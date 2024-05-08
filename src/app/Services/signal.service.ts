import { HttpClient } from '@angular/common/http';
import { Injectable, WritableSignal, computed, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { Appartment } from '../Models/Appartment.model';


@Injectable({
  providedIn: 'root'
})
export class SignalService {

  constructor(private http: HttpClient) { }

  //Signal stockant les valeurs de data quand on subscribe à appartments$
  modifiableAppartments = signal<Appartment[]>([])

  appartment1WithModifiedName = computed(() => {
    if(this.modifiableAppartments().length > 0){
      const appart1: Appartment = this.modifiableAppartments()[0]
      console.log("appart1", {...appart1, name: `computed_${appart1.name}_ofID_${appart1.id}`});
      
      return {...appart1, name: `computed_${appart1.name}_ofID_${appart1.id}`}
    } else {
      console.log("modifiableAppartments in computed", this.modifiableAppartments());

      return null
    }
  })

  //on doit ajouter un pipe à appartments$ pour stocker les valeurs de data dans l'observable quand on subscribe
  appartments$ = this.http.get<any>('http://localhost:4242/appartments').pipe(
    map(
      (data) => this.modifiableAppartments.set(data))
      ) 
      
      // ici on ajoute pas de pipe 
        appartments2$ = this.http.get<any>('http://localhost:4242/appartments')
      //on transforme directement l'observable en signal
      // --> problème, le signal créé est en readOnly donc on ne peut pas modifier ses valeurs par update ou set
      appartments2 = toSignal(this.appartments2$, {initialValue: []})
      
  updateName(appartment: Appartment): void {
    this.modifiableAppartments.update(items => items.map(item =>(
      item.id === appartment.id ? {...item, name: appartment.name} : item
    )))
  }

  update(appartment: Appartment, key: keyof Appartment): void {
    this.modifiableAppartments.update(items => items.map(item =>(
      item.id === appartment.id ? {...item, [key]: appartment[key]} : item
    )))
  }

  updateSuitableForEveryTypeObjectWithIdTable<T extends {id: number}>(objectToUpdate: T, key: keyof T): void {
    this.modifiableAppartments.update(items => items.map(item =>(
      item.id === objectToUpdate.id ? {...item, [key]: objectToUpdate[key]} : item
    )))
  }


}
