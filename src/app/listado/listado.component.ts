import { Component, OnInit } from '@angular/core';
import { faList,faShare, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

import { Router } from '@angular/router';


//Recursos mios
import {ProspectoService} from '../services/prospecto.service';
import {Prospecto} from '../interfaces/prospecto';




@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
  providers: []
})


export class ListadoComponent implements OnInit {


  // Iconos
  faList=faList;
  faShare = faShare;
  faCheck = faCheck;
  faTimes=faTimes;
  
  allprospectos: Prospecto[]=[];

  arr:any[]=[];
  arr1:any[]=[];

  constructor(private prospectoService: ProspectoService,  private router: Router) { 
    
    
    
  }

  ngOnInit(): void {
    this.getAllProspectos();
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
  

  // Genero arreglo para tabla
  generateArray(obj){
    return Object.keys(obj).map((key)=> {return obj[key]});
  }

  detalles(Prospectoid:any){
    const pid = Prospectoid;
    console.log("id", pid);
    this.router.navigate(['/detalles/', pid]);
  }

}
