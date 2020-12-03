import { Component, ViewEncapsulation, ViewChild  } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm }   from '@angular/forms';
import { Router } from '@angular/router';
import { faCheck, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { timer } from "rxjs";


//Recursos mios
import {ProspectoService} from '../services/prospecto.service';
import {ModalsalirComponent} from '../modalsalir/modalsalir.component';
@Component({
  selector: 'app-captura',
  templateUrl: './captura.component.html',
  styleUrls: ['./captura.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CapturaComponent {


  faCheck=faCheck;
  faSignOutAlt=faSignOutAlt;
 

  @ViewChild('formProspecto') public prospectoFormR:NgForm;


  // Validacion de telefono y rfc
  rfcPattern = "^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1]))((-)?([A-Z0-9]{3}))?$";
  telefonoPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
  prospectoForm: FormGroup;

  uploadedFiles: File;

  formularioValido= null;

  

  constructor(private http: HttpClient,private prospectoService: ProspectoService, private fb: FormBuilder, private modalService: NgbModal, private router: Router) {
    this.createForm();
  }
  createForm() {
    this.prospectoForm = this.fb.group({
     name:['', Validators.required],
     apellidop: ['', Validators.required],
     apellidom: [''],
     calle: ['', Validators.required],
     numero:['', Validators.required],
     colonia: ['', Validators.required],
     codigopostal:['', Validators.required],
     telefono: ['', [Validators.required, Validators.pattern(this.telefonoPattern)]],
     rfc: ['', [Validators.required, Validators.pattern(this.rfcPattern)]],
     documento: ['', Validators.required] 
   });
 }
 
  
  
  onFileChange(event){
    this.uploadedFiles = event.target.files[0];
    console.log(this.uploadedFiles);
  }
  insertar(prospectoForm: NgForm)
  {
    this.formularioValido = false;
    if(this.prospectoForm.invalid){
      return;
    }
    this.formularioValido=true;
    
    const formValue = this.prospectoForm.value;
    let formData  = new FormData();
  
    formData.append('name', formValue.name);
    formData.append('apellidop', formValue.apellidop);
    formData.append('apellidom', formValue.apellidom);
    formData.append('calle', formValue.calle);
    formData.append('numero', formValue.numero);
    formData.append('colonia', formValue.colonia);
    formData.append('codigopostal', formValue.codigopostal);
    formData.append('telefono',formValue.telefono);
    formData.append('rfc', formValue.rfc);
    formData.append('documento',this.uploadedFiles, this.uploadedFiles.name);
    formData.append('observacion',' ');
    
    this.prospectoService.createProspecto(formData)  
    .then((newProspecto) =>{
      console.log("Salio bien", newProspecto)
    },error => {
      console.log(error);
      console.log("Error:"+ error);
    } 
    );
    timer(3000)
    .subscribe(i => { 
      this.router.navigate(['/listado']); 
    })
    

  }
  get name(){
    return this.prospectoForm.get("name");
  }
  get apellidop(){
    return this.prospectoForm.get("apellidop");
  }
  get calle(){
    return this.prospectoForm.get("calle");
  }
  get numero(){
    return this.prospectoForm.get("numero");
  }
  get colonia(){
    return this.prospectoForm.get("colonia");
  }
  get codigopostal(){
    return this.prospectoForm.get("codigopostal");
  }

  get telefono(){
    return this.prospectoForm.get("telefono");
  }
  get rfc(){
    return this.prospectoForm.get("rfc");
  }

  public fileOver(event){
    console.log(event);
  }

  public fileLeave(event){
    console.log(event);
  }

  

 
  
  openBackDropCustomClass(content, form: NgForm) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }
  onClose() {
    this.modalService.dismissAll();
    console.log(this.prospectoFormR.value)
    //some function for login validation\
    this.prospectoFormR.form.reset();
  }
 


}
