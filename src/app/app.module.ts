import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ClientComponent } from './client/client.component';
import { HeaderComponent } from './header/header.component';
import { RegisseurComponent } from './regisseur/regisseur.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { ColisComponent } from './colis/colis.component';
import { FactureComponent } from './facture/facture.component';
import { VoyageComponent } from './voyage/voyage.component';
import { StructureComponent } from './structure/structure.component';
import { VehiculeComponent } from './vehicule/vehicule.component';
import { SingleColisComponent } from './colis/single-colis/single-colis.component';
import { ColisFormComponent } from './colis/colis-form/colis-form.component';
import { SingleClientComponent } from './client/single-client/single-client.component';
import { ClientFormComponent } from './client/client-form/client-form.component';
import { SingleFactureComponent } from './facture/single-facture/single-facture.component';
import { FactureFormComponent } from './facture/facture-form/facture-form.component';
import { SingleVoyageComponent } from './voyage/single-voyage/single-voyage.component';
import { VoyageFormComponent } from './voyage/voyage-form/voyage-form.component';
import { VehiculeFormComponent } from './vehicule/vehicule-form/vehicule-form.component';
import { SingleVehiculeComponent } from './vehicule/single-vehicule/single-vehicule.component';
import { StructureFormComponent } from './structure/structure-form/structure-form.component';
import { SingleStructureComponent } from './structure/single-structure/single-structure.component';
import { SingleRegisseurComponent } from './regisseur/single-regisseur/single-regisseur.component';
import { RegisseurFormComponent } from './regisseur/regisseur-form/regisseur-form.component';
import { AdministrateurFormComponent } from './administrateur/administrateur-form/administrateur-form.component';
import { SingleAdministrateurComponent } from './administrateur/single-administrateur/single-administrateur.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AdministrateurService } from './services/administrateur.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { ClientService } from './services/client.service';
import { ColisService } from './services/colis.service';
import { FactureService } from './services/facture.service';
import { RegisseurService } from './services/regisseur.service';
import { StructureService } from './services/structure.service';
import { VehiculeService } from './services/vehicule.service';
import { VoyageService } from './services/voyage.service';

const appRoutes:Routes = [
	{path:'auth/signup', component:SignupComponent},
	{path:'auth/signin', component:SigninComponent},
	{path:'administrateur',canActivate:[AuthGuardService], component:AdministrateurComponent},
	{path:'administrateur/new',canActivate:[AuthGuardService], component:AdministrateurFormComponent},
	{path:'administrateur/view:id',canActivate:[AuthGuardService], component:SingleAdministrateurComponent},
	{path:'client',canActivate:[AuthGuardService], component:ClientComponent},
	{path:'client/new', canActivate:[AuthGuardService],component:ClientFormComponent},
	{path:'client/view/:id',canActivate:[AuthGuardService], component:SingleClientComponent},
	{path:'colis',canActivate:[AuthGuardService], component:ColisComponent},
	{path:'colis/new',canActivate:[AuthGuardService],component:ColisFormComponent},
	{path:'colis/view/:id', canActivate:[AuthGuardService],component:SingleColisComponent},
	{path:'facture', canActivate:[AuthGuardService],component:FactureComponent},
	{path:'facture/new',canActivate:[AuthGuardService], component:FactureFormComponent},
	{path:'facture/view/:id', canActivate:[AuthGuardService],component:SingleFactureComponent},
	{path:'regisseur', canActivate:[AuthGuardService],component:RegisseurComponent},
	{path:'regisseur/new', canActivate:[AuthGuardService],component:RegisseurFormComponent},
	{path:'regisseur/view/:id', canActivate:[AuthGuardService],component:SingleRegisseurComponent},
	{path:'structure',canActivate:[AuthGuardService], component:StructureComponent},
	{path:'structure/new',canActivate:[AuthGuardService], component:StructureFormComponent},
	{path:'structure/new/:id', canActivate:[AuthGuardService],component:SingleStructureComponent},
	{path:'vehicule', canActivate:[AuthGuardService],component:VehiculeComponent},
	{path:'vehicule/new', canActivate:[AuthGuardService],component:VehiculeFormComponent},
	{path:'vehicule/new/:id', canActivate:[AuthGuardService],component:SingleVehiculeComponent},
	{path:'voyage', canActivate:[AuthGuardService],component:VoyageComponent},
	{path:'voyage/new', canActivate:[AuthGuardService],component:VoyageFormComponent},
	{path:'voyage/new/:id', canActivate:[AuthGuardService],component:SingleVoyageComponent},
	{path:'',redirectTo:'signin',pathMatch:'full'},
	{path:'**',redirectTo:'signin'}
]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    ClientComponent,
    HeaderComponent,
    RegisseurComponent,
    AdministrateurComponent,
    ColisComponent,
    FactureComponent,
    VoyageComponent,
    StructureComponent,
    VehiculeComponent,
    SingleColisComponent,
    ColisFormComponent,
    SingleClientComponent,
    ClientFormComponent,
    SingleFactureComponent,
    FactureFormComponent,
    SingleVoyageComponent,
    VoyageFormComponent,
    VehiculeFormComponent,
    SingleVehiculeComponent,
    StructureFormComponent,
    SingleStructureComponent,
    SingleRegisseurComponent,
    RegisseurFormComponent,
    AdministrateurFormComponent,
    SingleAdministrateurComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
	ReactiveFormsModule,
	RouterModule.forRoot(appRoutes),
	HttpClientModule,
  ],
  providers: [
    AdministrateurService,
	AuthGuardService,
	AuthService,
	ClientService,
	ColisService,
	FactureService,
	RegisseurService,
	StructureService,
	VehiculeService,
	VoyageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
