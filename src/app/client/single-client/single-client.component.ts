import { ClientService } from './../../services/client.service';
import { Client } from './../../models/Client.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-single-client',
  templateUrl: './single-client.component.html',
  styleUrls: ['./single-client.component.css']
})
export class SingleClientComponent implements OnInit {
  client !:Client;


  constructor(private route: ActivatedRoute,
			  private clientService:ClientService,
			  private router:Router) { }

  ngOnInit(){
	  this.client = new Client('','', '','','','');
	  const id = this.route.snapshot.params['id'];
	  this.clientService.getSingleClient(+id).then(
		  (client : Client)=>{
			  this.client = client;
		  }
	  );		
  }
  onBack(){
	  this.router.navigate(['/client'])
  }
  onMoov(){
	  this.router.navigate(['/colis','new'])
  }
}
