import { Router } from '@angular/router';
import { ClientService } from './../services/client.service';
import { Client } from './../models/Client.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit, OnDestroy {
  clients:Client[]= [];
  clientSubscrition!:Subscription;


  constructor(private clientService:ClientService, private router:Router) {
	  
   }
   ngOnInit(){
		this.clientSubscrition = this.clientService.clientsSubject.subscribe(
			(clients: Client[])=>{
			this.clients = clients;
			}
	);
		this.clientService.emitClients();
	}
   onNewClient(){
	   this.router.navigate(['/client', 'new'])
   }
   onDeleteClient(client:Client){
	   this.clientService.removeClient(client);

   }
   onViewClient(id: number){
	   this.router.navigate(['/client','view', id]);
   }
   ngOnDestroy() {
	   this.clientSubscrition.unsubscribe()
   }

 

}
