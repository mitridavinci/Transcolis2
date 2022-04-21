import { Client } from './../../models/Client.model';
import { Router } from '@angular/router';
import { ClientService } from './../../services/client.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {
	
  clientForm!:FormGroup;
  constructor(private formBuilder: FormBuilder,
			  private clientService:ClientService,
			  private router: Router) { }

  ngOnInit(){
	  this.initForm();
  }
	initForm() {
		this.clientForm = this.formBuilder.group({
			clientFirstName:['',Validators.required],
			clientLastName:['',Validators.required],
			clientTel:['',Validators.required],
			clientEmail:['',Validators.required],
			clientVille:['',Validators.required],
			numeroCNI:['',Validators.required],
		})
	}
	onSaveClient(){
		const clientFirstName = this.clientForm.get('clientFirstName')!.value;
		const clientLastName = this.clientForm.get('clientLastName')!.value;
		const clientTel = this.clientForm.get('clientTel')!.value;
		const clientEmail = this.clientForm.get('clientEmail')!.value;
		const clientVille = this.clientForm.get('clientVille')!.value;
		const numeroCNI = this.clientForm.get('numeroCNI')!.value;
		const newClient = new Client(clientFirstName,clientLastName,clientTel,clientEmail
									,clientVille,numeroCNI);
		this.clientService.createNewClient(newClient);
		this.router.navigate(['/client'])
	}
}
