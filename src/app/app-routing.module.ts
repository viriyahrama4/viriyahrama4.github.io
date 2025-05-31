import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'health-and-accident', pathMatch: 'full' },
    { path: 'health-and-accident', loadChildren: () => import('./health-and-accident/health-and-accident.module').then(m => m.HealthAndAccidentModule) },
    { path: 'parts', loadChildren: () => import('./parts/parts.module').then(m => m.PartsModule) },
    { path: 'insurance', loadChildren: () => import('./insurance/insurance.module').then(m => m.InsuranceModule) },

];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
