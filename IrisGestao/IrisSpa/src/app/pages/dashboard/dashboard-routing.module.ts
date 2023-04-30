import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes
}
from '@angular/router';

const routes: Routes = [
	{
		path: 'financial-vacancy',
		loadChildren: () =>
			import('./financial-vacancy/financial-vacancy.module').then(
		 		(m) => m.FinancialVacancyModule
			),
		data: {
			role: 'SUPERINTENDENTE,GERENTE,COORDENADOR,ANALISTA',
		}
    },
    {
        path: 'receiving-performance',
        loadChildren: () =>
		 	import('./receiving-performance/receiving-performance.module').then(
		 		(m) => m.ReceivingPerformanceModule
		 	),
		data: {
			role: 'SUPERINTENDENTE,GERENTE,COORDENADOR,ANALISTA',
		}
    },
    // {
    //     path: 'price-per-meter',
    //     // loadChildren: () =>
	// 	// 	import('./dashboard/price-per-meter.module').then(
	// 	// 		(m) => m.PricePerMeterModule
	// 	// 	),
	// 	data: {
	// 		role: 'SUPERINTENDENTE,GERENTE,COORDENADOR,ANALISTA',
	// 	}
    // },
    // {
    //     path: 'total-managed',
    //     // loadChildren: () =>
	// 	// 	import('./dashboard/total-managed.module').then(
	// 	// 		(m) => m.TotalManagedModule
	// 	// 	),
	// 	data: {
	// 		role: 'SUPERINTENDENTE,GERENTE,COORDENADOR,ANALISTA',
	// 	}
    // }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class DashboardRoutingModule { };
