import { Component, WritableSignal, computed, effect, signal, untracked } from '@angular/core';
import { SignalService } from '../../Services/signal.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { Appartment } from '../../Models/Appartment.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal-use-v1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signal-use-v1.component.html',
  styleUrl: './signal-use-v1.component.scss'
})
export class SignalUseV1Component {

  constructor(private signalService: SignalService){
    effect(() => {
      // this.modifiableAppartments = signalService.modifiableAppartments()
      if(this.counter2() % this.counter() === 0){
        this.suitableComputedCounter.set(this.counter() * this.counter2())
        console.log("effect");
        
      }
    }, {allowSignalWrites: true})
  }

  //création d'une variable pour récupérer la valeur du signal modifiableAppartments du service
  //--> on doit subscribe à l'observable pour pouvoir stocker les valeurs dans le signal
  // et utiliser un effect pour récupérer les valeurs du signal dans une variable locale
  // modifiableAppartments: any
  
  ngOnInit(): void {
    this.signalService.appartments$.subscribe()
  }

  //recupération dans un signal de la valeur de l'observable signalService.appartments2$ --> pb: readOnly
  appartments2_v1 = toSignal(this.signalService.appartments2$)
    //recupération dans un signal de la valeur du signal signalService.appartments --> pb: readOnly aussi
  appartments2_v2 = this.signalService.appartments2

  
  //récupération de mon signal modifiableAppartments dans un signal local pour éviter de répéter this.signalService
  modifiableAppartments2: WritableSignal<Appartment[]> = this.signalService.modifiableAppartments
  //de même récupération dans une variable locale appart1 du computed signal appartment1WithModifiedName
  appart1 = this.signalService.appartment1WithModifiedName

  //création d'un signal counter
  counter = signal<number>(0)

  //fonction pour incrémenter la valeur du signal counter
  incrementCounter():void {
    this.counter.update(value => value + 1)
  }

  //création d'un signal counter
  counter2 = signal<number>(0)

  //fonction pour incrémenter la valeur du signal counter
  incrementCounter2():void {
    this.counter2.set(this.counter2() + 1)
  }

  // computedCounter = computed((previousValue: number) => {
  //   if(this.counter2() % this.counter() === 0){
  //     return this.counter() * this.counter2()
  //   } else {
  //     return previousValue
  //   }
  // })

  //IMPOSSIBLE DE RECUPERER L'ANCIENNE VALEUR DU COMPUTED SIGNAL SI LA CONDITION N'EST PAS REMPLIE => IL FAUT UTILISER UN EFFECT
  computedCounter = computed(() => {
    if(this.counter2() % this.counter() === 0){
      return this.counter() * this.counter2()
    } else {
      return 0
    }
  })

  suitableComputedCounter = signal<number>(0)

  //création d'un computed signal qui dépend de appart 1 et counter mais qui ne change que lorsque appart1 change
  countedAppart1 = computed(() =>  `${this.appart1()?.name} a un compteur de ${untracked(this.counter)}`)


  

  updateAppartmentName(appartment: Appartment): void {
    console.log("appartment", appartment);
    
    this.signalService.updateSuitableForEveryTypeObjectWithIdTable<Appartment>(appartment, "name");
    console.log("signal", this.modifiableAppartments2());
    
  }


}
