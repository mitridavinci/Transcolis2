export class Regisseur{
	photoRegisseur?:string;
	constructor(
		public IdRegisseur:string,
		public RegisseurFirstName:string,
		public RegisseurLastName:string,
		public emailRegisseur:string,
		public telRegisseur:string,
		public adresseRegisseur:string){}
}