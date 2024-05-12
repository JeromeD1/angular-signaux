import { Component, effect, inject } from '@angular/core';
import { Appartment } from '../../Models/Appartment.model';
import { CommonModule } from '@angular/common';
import { SignalService } from '../../Services/signal.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal-use-v2',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signal-use-v2.component.html',
  styleUrl: './signal-use-v2.component.scss'
})
export class SignalUseV2Component{

  signalService: SignalService = inject(SignalService)

  originalAppartments: Appartment[] = this.signalService.modifiableAppartments()
  appartments: Appartment[] = this.signalService.modifiableAppartments()

  myForm = inject(FormBuilder).group({
    id: [0],
    name: ['']
  })

  constructor(){
    effect(()=> {
      this.appartments = this.signalService.modifiableAppartments()
    })
  }

  addAppartment():void {
    if(this.myForm.value.id && this.myForm.value.name){
      const formData: Appartment = {
        id: this.myForm.value.id,
        name: this.myForm.value.name
      } 

      this.signalService.addAppartment(formData)
    }
  }

  }

 


