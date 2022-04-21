import { Structure } from './Structure.model';
import { Client } from './Client.model';
import { Colis } from './Colis.model';
export class Facture{
	
	constructor(public id:string, 
		        public dateFacture:string,
				public colis: Colis[],
				public client: Client,
				public structure : Structure
				){}
}