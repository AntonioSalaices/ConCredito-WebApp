import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute, ParamMap  } from '@angular/router';
import {FormBuilder} from '@angular/forms';
import { faUndo, faCheck, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { NgForm, FormGroup }   from '@angular/forms';

//Recursos mios
import {ProspectoService} from '../services/prospecto.service';
import {Prospecto} from '../interfaces/prospecto';

@Component({
  selector: 'app-editpage',
  templateUrl: './editpage.component.html',
  styleUrls: ['./editpage.component.css']
})
export class EditpageComponent implements OnInit {
  faUndo=faUndo;
  faCheck=faCheck;
  prospectodetail: any;
  faFilePdf=faFilePdf;
  status:any[];

  prospectoForm: FormGroup;


  createForm() {
  this.prospectoForm = this.fb.group({
    id: [''],
    estatus: [''],
    observacion: [''],
  });
}
  
  constructor(private prospectoService: ProspectoService, private fb: FormBuilder,private router: Router, private route: ActivatedRoute) {
    this.createForm();
   }

  id: number;
  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    Number(this.id);
    console.log("Recibi ", this.id);
    this.getProspecto(this.id);
    this.status = [
      {stat:"A", name:"Autorizado"},
      {stat:"R", name:"Rechazado"}
    ]
  }

  getProspecto(id){
    this.prospectoService.getProspecto(id)
    .then(prospecto=>{
      this.prospectodetail = prospecto;
      console.log(this.prospectodetail);
    })
  }
  editar(id:any, prospectoForm: NgForm){
    const formValue = this.prospectoForm.value;
    formValue.id = this.id;
    console.log(formValue);
    this.prospectoService.updateProspecto(formValue)
    .subscribe((update) =>{ 
      console.log("Salio bien")

    },error => {
      console.log("Algo salio mal");
    } 
    );
    this.router.navigate(['/evaluacion']);

  }
}
