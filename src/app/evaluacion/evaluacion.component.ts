import { Component, OnInit } from '@angular/core';
import { faShare, faCheck, faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


//Recursos mios
import {ProspectoService} from '../services/prospecto.service';
import {Prospecto} from '../interfaces/prospecto';
@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.css']
})

export class EvaluacionComponent implements OnInit {
  faShare = faShare;
  faCheck = faCheck;
  faTimes=faTimes;
  faEdit=faEdit;
  
  allprospectos: Prospecto[]=[];

  arr:any[]=[];
  arr1:any[]=[];
  id:any;
  constructor(private prospectoService: ProspectoService,  private router: Router) {
   
    
   
   }
 
  ngOnInit(): void {
    this.getAllProspectos();
    // RouteReuseStrategy sirve para el cacheado
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  filterArray(ev:any){
    this.arr=this.arr1;
    const val = ev.target.value;
    if(val && val.trim() != ""){
      this.arr = this.arr1.filter((item)=>{
        return (item.id.toString().toLowerCase().indexOf(val.toLowerCase())> -1
        || item.name.toLowerCase().indexOf(val.toLowerCase())> -1
        || item.apellidop.toLowerCase().indexOf(val.toLowerCase())> -1
        || item.apellidom.toLowerCase().indexOf(val.toLowerCase())> -1
        || item.codigopostal.toLowerCase().indexOf(val.toLowerCase())> -1
        || item.telefono.toLowerCase().indexOf(val.toLowerCase())> -1
        || item.rfc.toLowerCase().indexOf(val.toLowerCase())> -1
        || item.estatus.toLowerCase().indexOf(val.toLowerCase())> -1
        )
      })
    }
  }

  // Hago la petición rest para obtener todos
  getAllProspectos(){
    this.prospectoService.getAllProspectos()
    .then(prospectos=>{
      this.allprospectos = prospectos;
      this.arr = prospectos;
      this.arr1 = this.arr;
      console.log(this.allprospectos);
    });

  }
  
  editar(Prospectoid:any){
    const pid = Prospectoid;
    console.log("id", pid);
    this.router.navigate(['/editar/', pid]);
  }

  

  // Genero arreglo para tabla
  generateArray(obj){
    return Object.keys(obj).map((key)=> {return obj[key]});
  }
}
