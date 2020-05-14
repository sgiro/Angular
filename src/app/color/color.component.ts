import { PremierService } from './../premier.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
  providers : [PremierService]
})
export class ColorComponent implements OnInit {
color ='red';

  constructor(private Pserv : PremierService,
     private router: Router,
     private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
    (params)=>{
      this.color=params.default;
    }
    );
  }

  processRequest(message: any){

    alert(message);
  }
  LoggerMesData(){
   this.Pserv.logger('test');
  }

  GoToCv(){
    const link =['cv'];
    this.router.navigate(link);
  }
}
