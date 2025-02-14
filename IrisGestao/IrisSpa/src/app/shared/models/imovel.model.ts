import { Cliente } from './cliente.model';
import { ImovelCategoria } from './imovel-categoria.model';
import { ImovelEndereco } from './imovel-endereco.model';
import { ImovelUnidade } from './imovel-unidade.model';

export interface IImovel {
	guidReferencia: string;
	nome?: string;
	nroUnidades?: number;
	areaTotal?: number;
	areaUtil?: number;
	areaHabitese?: number;
	imgCapa?: string;
	numCentroCusto?: number;
	idCategoriaImovelNavigation?: ImovelCategoria;
	idClienteProprietarioNavigation?: Cliente;
	imovelEndereco?: ImovelEndereco[];
	unidade?: ImovelUnidade[];
	imagens?: ImageData[];
}

export class Imovel {
	constructor(
		public guidReferencia: string,
		public nome?: string,
		public nroUnidades?: number,
		public areaTotal?: number,
		public areaUtil?: number,
		public areaHabitese?: number,
		public imgCapa?: string,
		public numCentroCusto?: number,
		public idCategoriaImovelNavigation?: ImovelCategoria,
		public idClienteProprietarioNavigation?: Cliente,
		public imovelEndereco?: ImovelEndereco[],
		public unidade?: ImovelUnidade[],
		public imagens?: ImageData[],
		public eventos?: any[]
	) {}

	deserialize(input: any) {
		Object.assign(this, input);
		return this;
	}
}

export type ImageData = {
	url: string;
	thumbUrl: string;
	alt?: string;
};
