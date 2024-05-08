import { Routes } from '@angular/router';
import { SignalUseV1Component } from './components/signal-use-v1/signal-use-v1.component';
import { SignalUseV2Component } from './components/signal-use-v2/signal-use-v2.component';
import { AffichageSeulComponent } from './components/affichage-seul/affichage-seul.component';

export const routes: Routes = [
    {path: "", component: SignalUseV1Component},
    {path: "signal2", component: SignalUseV2Component},
    {path: "affichage", component: AffichageSeulComponent}

];
