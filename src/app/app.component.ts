import { Component, OnInit, WritableSignal, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SignalUseV1Component } from './components/signal-use-v1/signal-use-v1.component';
import { SignalUseV2Component } from './components/signal-use-v2/signal-use-v2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SignalUseV1Component, SignalUseV2Component, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'workshopSignals';

  

  // getAppartments(): void {
  //   this.appartments = toSignal(this.signalService.getAppartment())
  // }
}
