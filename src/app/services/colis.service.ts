import { Injectable } from '@angular/core';
import  firebase from 'firebase';
import { Subject } from 'rxjs';
import { Colis } from '../models/Colis.model';

@Injectable({
  providedIn: 'root'
})
export class ColisService {

	colis: Colis[]=[];
	colisSubject = new Subject<Colis[]>();
   
	 constructor() { }
	 emitColis(){
		 this.colisSubject.next(this.colis);
	 }
	 saveColis(){
		 firebase.database().ref('/colis').set(this.colis);
	 }
	 getColis(){
		 firebase.database().ref('/colis')
		 .on('value',(data)=>{
			 this.colis = data.val() ? data.val() :[];
			 this.emitColis();
		 })
	 }
	 getSingleColis(id : number){
		 return new Promise<Colis>(
			 (resolve, reject)=>{
				 firebase.database().ref('/colis/'+ id).once('value').then(
					 (data)=>{
						 resolve(data.val());
					 },(error)=>{
					   reject(error)
				   }
				 )
			 }, 
		 )
	 }
	 createNewColis(newColis: Colis){
		 this.colis.push(newColis);
		 this.saveColis();
		 this.emitColis();
	 }
	 removeColis(colis:Colis){
   
		 const clientIndexToRemove = this.colis.findIndex(
			 (colisEl) =>{
				 if(colisEl === colis){
					 return true;
			   }else {
				   return false;
			   }
			 }
		 );
		 this.colis.splice(clientIndexToRemove, 1);
		 this.saveColis();
		 this.emitColis();
	 }
	
}
