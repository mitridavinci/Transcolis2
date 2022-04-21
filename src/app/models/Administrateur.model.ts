export class Administrateur{
		photoAdministrateur?:string;
	constructor(
				public adminID:string, 	
				public adminFirstName:string,
				public adminLastName:string,
				public adminEmail:string,
				public adminTel:number,
				public adminAdresse:string,
				){}
}
