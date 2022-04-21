import { ClientService } from './../../services/client.service';
import { Colis } from './../../models/Colis.model';
import { ColisService } from './../../services/colis.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-colis-form',
  templateUrl: './colis-form.component.html',
  styleUrls: ['./colis-form.component.css']
})
export class ColisFormComponent implements OnInit {

  
	colisForm!:FormGroup;
	constructor(private formBuilder: FormBuilder,
				private colisService:ColisService,
				private clientService:ClientService,
				private router: Router) { }
  
	ngOnInit(){
		this.initForm();
	}
	  initForm() {
		  this.colisForm = this.formBuilder.group({
			  valeurColis:['',Validators.required],
			  natureColis:['',Validators.required],
			  villeDepartColis:['',Validators.required],
			  destination:['',Validators.required],
			  destinataireColis:['',Validators.required],
			  destinataireNumeros:['',Validators.required],
		  })
	  }
	  onSaveColis(){
		  const valeurColis = this.colisForm.get('valeurColis')!.value;
		  const natureColis = this.colisForm.get('natureColis')!.value;
		  const villeDepartColis = this.colisForm.get('villeDepartColis')!.value;
		  const destination = this.colisForm.get('destination')!.value;
		  const destinataireColis = this.colisForm.get('destinataireColis')!.value;
		  const destinataireNumeros = this.colisForm.get('destinataireNumeros')!.value;
		  const newColis = new Colis(valeurColis,natureColis,villeDepartColis,destination,destinataireColis,destinataireNumeros);
		  this.colisService.createNewColis(newColis);
		  this.router.navigate(['/colis'])
	  }
}
