import {
	Component,
	ElementRef,
	ViewChild
} from '@angular/core';
import { Router } from '@angular/router';
import {
	LazyLoadEvent,
	MenuItem
} from 'primeng/api';
import { first } from 'rxjs';
import {
	EventoService,
	RentContractService,
	ReportService,
	ResponsiveService
} from 'src/app/shared/services';
import { Utils } from 'src/app/shared/utils';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.scss']
})
export class CommercialComponent {
  @ViewChild('reportToPdf', {read: ElementRef}) childElement: ElementRef<HTMLElement>;
  
	isLoading: boolean = true;
	isMobile: boolean = false;
	displayMobileFilters: boolean = false;
  	totalRecords:number = 0;
  	resultEntries: any[];

	first = 0;
	rows = 10;

	filterImovel: number;
	filterLocador: number;
	filterLocatario: number;
	filterPeriodo: Date[];

	opcoesImovel = [
		{
			label: 'Todos Imóveis',
			value: null,
		},
	];
	opcoesLocador = [
		{
			label: 'Locador',
			value: null,
		},
	];
	opcoesLocatario = [
		{
			label: 'Locatário',
			value: null,
		},
	];
  	items: MenuItem[] = [
		{
			label: 'Opções',
			items: [
				{
					label: 'PDF',
					icon: 'pi pi-file-pdf',
					command: () => {
						this.exportarPdf();
					}
				},
				{
					label: 'Excel',
					icon: 'pi pi-file-excel',
					command: () => {
						this.exportarExcell();
					}
				}
			]
		}
	];

	constructor(
		private router: Router,
		private responsiveService: ResponsiveService,
		private reportService: ReportService,
		private rentContract: RentContractService,
		private eventService: EventoService
	) { };

  ngOnInit(): void {
		this.responsiveService.screenWidth$.subscribe((screenWidth) => {
			this.isMobile = screenWidth < 768;
		});

		this.init();
	};

  init(): void {

		const currYear = new Date().getFullYear();
		this.filterPeriodo = [new Date(currYear, 0, 1), new Date(currYear, 11, 1)];

		this.filterResult();
		this.getOwnersListData();
		this.getRentersListData();
		this.getPropertiesListData();
	};

  openFilters() {
		this.displayMobileFilters = true;
	}

  filterResult = (e?: Event, page: number = 1, stack: boolean = false) => {
		this.isLoading = true;

		if(this.filterPeriodo?.[0], this.filterPeriodo?.[1]) {
			const startDate = new Date(this.filterPeriodo[0]);
			startDate.setDate(1);
			const endDate = new Date(this.filterPeriodo[1]);
			endDate.setDate(1);

			const startDateString = startDate.toISOString().split('T')[0];
			const endDateString = endDate.toISOString().split('T')[0];

			const idImovel = this.filterImovel ?? null;
			const idLocador = this.filterLocador ?? null;
			const idLocatario = this.filterLocatario ?? null;
	
			this.getData(startDateString, endDateString, idImovel, idLocatario, idLocador);
		}

	};

  filterResultDebounce: Function = Utils.debounce(this.filterResult, 1000);

  loadResultPage(event: LazyLoadEvent): void {
		if (event.first != null) {
			const page = Math.floor(event.first / this.rows) + 1;
			this.filterResult(undefined, page);
			this.scrollTop();
		}
	};

  exportarPdf(): void {
		Utils.saveReportAsPdf(
			this.childElement.nativeElement,
			'relatorio-comercial',
			'Relatório Comercial de Imóveis'
		);
	}

	exportarExcell(): void {
		Utils.saveReportAsExcell(
			this.childElement.nativeElement,
			'relatorio-comercial',
			'Relatório Comercial de Imóveis'
		);
	}

	getOwnersListData() {
		this.rentContract
			.getActiveOwners()
			.pipe(first())
			.subscribe({
				next: (e: any) => {
					if (e.success) {
						this.opcoesLocador.push(
							...e.data.map((item: any) => {
								return {
									label: this.truncateChar(item.nome),
									value: item.id,
								};
							})
						);
					} else console.error(e.message);
				},
				error: (err) => {
					console.error(err);
				},
			});
	};

	getRentersListData() {
		this.eventService
			.getActiveRenters()
			.pipe(first())
			.subscribe({
				next: (e: any) => {
					if (e.success) {
						this.opcoesLocatario.push(
							...e.data.map((item: any) => {
								return {
									label: this.truncateChar(item.nome),
									value: item.id,
								};
							})
						);
					} else console.error(e.message);
				},
				error: (err) => {
					console.error(err);
				},
			});
	};

	getPropertiesListData() {
		this.eventService
			.getActiveProperties()
			.pipe(first())
			.subscribe({
				next: (e: any) => {
					if (e.success) {
						this.opcoesImovel.push(
							...e.data.map((item: any) => {
								return {
									label: this.truncateChar(item.nome),
									value: item.id,
								};
							})
						);
					} else console.error(e.message);
				},
				error: (err) => {
					console.error(err);
				},
			});
	};

	getData(
		startDateString: string,
		endDateString: string,
		imovelId?: number,
		locatarioId?: number,
		locadorId?: number) : void {

		this.isLoading = true;

		this.reportService
			.getCommercial(startDateString, endDateString, imovelId, locatarioId, locadorId)
			.pipe(first())
			.subscribe({
				next: (data) => {
					if (data) {
						this.resultEntries = data;
						this.totalRecords = this.resultEntries.length;
					}
				},
				error: () => {
					console.error(console.error);
				},
				complete : () => this.isLoading = false,
			});
	
	};

  truncateChar(text: string): string {
		const charlimit = 48;
		if (!text || text.length <= charlimit) {
			return text;
		}

		const without_html = text.replace(/<(?:.|\n)*?>/gm, '');
		const shortened = without_html.substring(0, charlimit) + '...';
		return shortened;
	};

	scrollTop() {
		window.scroll({
			top: 0,
			left: 0,
		});
	};

}
