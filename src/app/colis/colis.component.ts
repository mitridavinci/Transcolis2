import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Colis } from '../models/Colis.model';
import { ColisService } from '../services/colis.service';

@Component({
  selector: 'app-colis',
  templateUrl: './colis.component.html',
  styleUrls: ['./colis.component.css']
})
export class ColisComponent implements OnInit {

	colis:Colis[]= [];
	colisSubscrition!:Subscription;
  
  
	constructor(private colisService:ColisService, private router:Router) {
		
	 }
	 ngOnInit(){
		  this.colisSubscrition = this.colisService.colisSubject.subscribe(
			  (colis: Colis[])=>{
			  this.colis = colis;
			  }
	  );
		  this.colisService.emitColis();
	  }
	 onNewColis(){
		 this.router.navigate(['/colis', 'new'])
	 }
	 onDeleteColis(colis:Colis){
		 this.colisService.removeColis(colis);
  
	 }
	 onViewColis(id: number){
		 this.router.navigate(['/colis','view', id]);
	 }
	 ngOnDestroy() {
		 this.colisSubscrition.unsubscribe()
	 }

}
