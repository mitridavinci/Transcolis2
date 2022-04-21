import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Client } from '../models/Client.model';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  
 clients: Client[]=[];
 clientsSubject = new Subject<Client[]>();

  constructor() { }
  emitClients(){
	  this.clientsSubject.next(this.clients);
  }
  saveClients(){
	  firebase.database().ref('/client').set(this.clients);
  }
  getClients(){
	  firebase.database().ref('/client')
	  .on('value',(data)=>{
		  this.clients = data.val() ? data.val() :[];
		  this.emitClients();
	  })
  }
  getSingleClient(id : number){
	  return new Promise<Client>(
		  (resolve, reject)=>{
			  firebase.database().ref('/client/'+ id).once('value').then(
				  (data)=>{
					  resolve(data.val());
				  },(error)=>{
					reject(error)
				}
			  )
		  }, 
	  )
  }
  createNewClient(newClient: Client){
	  this.clients.push(newClient);
	  this.saveClients();
	  this.emitClients();
  }
  removeClient(client:Client){

	  const clientIndexToRemove = this.clients.findIndex(
		  (clientEl) =>{
			  if(clientEl === client){
				  return true;
			}else {
				return false;
			}
		  }
	  );
	  this.clients.splice(clientIndexToRemove, 1);
	  this.saveClients();
	  this.emitClients();
  }

}
