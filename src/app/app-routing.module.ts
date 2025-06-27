import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'health-and-accident', pathMatch: 'full' },
    { path: 'health-and-accident', loadChildren: () => import('./health-and-accident/health-and-accident.module').then(m => m.HealthAndAccidentModule) },
    { path: 'others', loadChildren: () => import('./others/others.module').then(m => m.OthersModule) },
    { path: 'insurance', loadChildren: () => import('./insurance/insurance.module').then(m => m.InsuranceModule) },
    { path: 'compensation', loadChildren: () => import('./compensation/compensation.module').then(m => m.CompensationModule) },
    { path: 'property', loadChildren: () => import('./property/property.module').then(m => m.PropertyModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
