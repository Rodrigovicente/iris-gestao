import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'listing',
		loadChildren: () =>
			import('./revenue-listing/revenue-listing.module').then(
				(m) => m.RevenueListingModule
			),
		data: {
			role: 'SUPERINTENDENTE,GERENTE,COORDENADOR,ANALISTA',
		},
	},
	{
		path: 'details/:guid',
		loadChildren: () =>
			import('./revenue-view/revenue-view.module').then(
				(m) => m.RevenueViewModule
			),
		data: {
			role: 'SUPERINTENDENTE,GERENTE,COORDENADOR,ANALISTA',
		},
	},
	{
		path: 'edit/:guid',
		loadChildren: () =>
			import('./revenue-edit/revenue-edit.module').then(
				(m) => m.RevenueEditModule
			),
		data: {
			role: 'SUPERINTENDENTE,GERENTE,COORDENADOR,ANALISTA',
		},
	},
	{
		path: 'register',
		loadChildren: () =>
			import('./revenue-register/revenue-register.module').then(
				(m) => m.RevenueRegisterModule
			),
		data: {
			role: 'SUPERINTENDENTE,GERENTE,COORDENADOR,ANALISTA',
		},
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class RevenueRoutingModule {}
