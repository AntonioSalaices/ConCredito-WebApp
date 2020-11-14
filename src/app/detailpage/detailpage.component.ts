import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute, ParamMap  } from '@angular/router';
import { faUndo, faFilePdf, faShare, faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

//Recursos mios
import {ProspectoService} from '../services/prospecto.service';
import {Prospecto} from '../interfaces/prospecto';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.css']
})
export class DetailpageComponent implements OnInit {
  faUndo=faUndo;
  prospectodetail: any;
  faFilePdf=faFilePdf;
  faShare = faShare;
  faCheck = faCheck;
  faTimes=faTimes;
  id: number;
  constructor(private prospectoService: ProspectoService,private router: Router, private route: ActivatedRoute,) {
    this.id = this.route.snapshot.params.id;
    Number(this.id);
    console.log("Recibi ", this.id);
    this.getProspecto(this.id);

   }

 

  ngOnInit(): void {
    

  }
  getProspecto(id){
    console.log(id);
    this.prospectoService.getProspecto(id)
    .then(prospecto=>{
      this.prospectodetail = prospecto;
      console.log(this.prospectodetail);
    })
  }
  

}
