import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { RoomcontrolComponent} from '../roomcontrol/roomcontrol.component';
import { TelevisionComponent } from '../television/television.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'roomcontrol',  component: RoomcontrolComponent },
  { path: 'television',  component: TelevisionComponent }
];