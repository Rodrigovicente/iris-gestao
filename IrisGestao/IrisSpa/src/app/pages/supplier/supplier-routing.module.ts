import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';

const routes: Routes = [
	{
		path: 'listing',
		// component: PropertyListingComponent,
		loadChildren: () =>
			import('./supplier-listing/supplier-listing.module').then(
				(m) => m.SupplierListingModule
			),
		data: {
			role: 'SUPERINTENDENTE,GERENTE,COORDENADOR,ANALISTA',
		},
	},
	// {
	// 	path: 'details/:uid',
	// 	// component: PropertyListingComponent,
	// 	loadChildren: () =>
	// 		import('./client-view/client-view.module').then(
	// 			(m) => m.ClientViewModule
	// 		),
	// 	data: {
	// 		role: 'SUPERINTENDENTE,GERENTE,COORDENADOR,ANALISTA',
	// 	},
	// },
	// {
	// 	path: 'register/:uid',
	// 	// component: PropertyListingComponent,
	// 	loadChildren: () =>
	// 		import('./client-register/client-register.module').then(
	// 			(m) => m.ClientRegisterModule
	// 		),
	// 	data: {
	// 		role: 'SUPERINTENDENTE,GERENTE,COORDENADOR,ANALISTA',
	// 	},
	// }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class SupplierRoutingModule {}
