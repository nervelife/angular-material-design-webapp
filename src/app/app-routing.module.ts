import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children:
    [{
      path: '', component: NavigationComponent, children:
      [{
        path: '', component: DashboardComponent
      }]
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
