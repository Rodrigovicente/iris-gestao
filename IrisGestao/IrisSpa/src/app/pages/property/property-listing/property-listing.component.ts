import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api/lazyloadevent';
import { first } from 'rxjs';
import { Imovel } from 'src/app/shared/models';
import { ImovelService } from 'src/app/shared/services';

@Component({
	selector: 'app-property-listing',
	templateUrl: './property-listing.component.html',
	styleUrls: ['./property-listing.component.scss'],
})
export class PropertyListingComponent implements OnInit {

	properties: Imovel[] = [];

	totalListCount: number;
	isLoadingList = false;

	first = 0;
	rows = 10;

	constructor(private imovelService: ImovelService) { }

	ngOnInit(): void {
		this.getPagingData();
	}

	loadClientsPage(event: LazyLoadEvent) {
		if (event.first != null) {
			this.isLoadingList = true;
			const page = Math.floor(event.first / this.rows) + 1;
			this.getPagingData(page);
		}
	}

	getPagingData(page:number = 1): void	{

		const list = this.imovelService
			.getPerperties()
			?.pipe(first())
			.subscribe((event: any) => {
				this.properties = [];
				this.isLoadingList = true;
				this.totalListCount = event.totalCount;

				event.items.forEach((imovel: Imovel) => {
					// console.debug('Imovel Data >> ' + JSON.stringify(imovel));
					this.properties.push(imovel);
				});
				this.isLoadingList = false;
			});

	};
}