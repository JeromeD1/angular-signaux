import { Component, OnInit, Signal, WritableSignal, signal } from '@angular/core';
import { SignalV2Service } from '../../Services/signal-v2.service';
import { Appartment } from '../../Models/Appartment.model';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { AppartmentSignalStateService } from '../../Services/appartment-signal-state.service';

@Component({
  selector: 'app-signal-use-v2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signal-use-v2.component.html',
  styleUrl: './signal-use-v2.component.scss'
})
export class SignalUseV2Component{

  constructor(private signalService: SignalV2Service, private appartService: AppartmentSignalStateService){

  }

  name = this.appartService.select('name')
  
/************NE FONCTIONNE PAS **********************/
  // appartments: Signal<Appartment[]> = this.signalService.getAppartments()
  // modifiableAppartments: WritableSignal<Appartment[]> = signal(this.signalService.getAppartments()())

  // modifyAppartments(): void {
    
  //   this.modifiableAppartments.update((value) => value.map((item) => ({...item, name: item.name + "_" + item.id})) )

  // }
/************************************ */

}
