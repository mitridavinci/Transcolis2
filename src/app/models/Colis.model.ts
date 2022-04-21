import { Structure } from './Structure.model';
export class Colis{
		photoColis?:string;
	constructor(
				public valeurColis: string,
			 	public natureColis: string,
				public villeDepartColis:string,
				public destination:string,
				public destinataireColis:string,
				public destinataireNumeros:String,
				){}
}