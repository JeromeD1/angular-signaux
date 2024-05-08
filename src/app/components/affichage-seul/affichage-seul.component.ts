import { Component, WritableSignal, inject } from '@angular/core';
import { Appartment } from '../../Models/Appartment.model';
import { SignalService } from '../../Services/signal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-affichage-seul',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './affichage-seul.component.html',
  styleUrl: './affichage-seul.component.scss'
})
export class AffichageSeulComponent {


  appartments: WritableSignal<Appartment[]> = inject(SignalService).modifiableAppartments

  ngOnInit(): void {
    console.log("this.appartments",this.appartments());
    
  }
}
