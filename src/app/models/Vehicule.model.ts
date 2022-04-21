import { Voyage } from './Voyage.model';
export class Vehicule{
	photo?: string;
	constructor(
				public vehiculeId: string,
				public marqueVehicule:string,
				public modeleVehicule: string,
				public versionVehicule: string,
				public voyageVehicule:Voyage[],
				){}
}