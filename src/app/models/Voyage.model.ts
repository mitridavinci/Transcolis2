import { Vehicule } from './Vehicule.model';
export class Voyage{
	photoVehicule?:string;
	constructor(public idVoyage:number,
				public dateVoyage: string,
				public departVoyage:string,
				public destionationVoyage: string,
				public vehicule: Vehicule){}
}