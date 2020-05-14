import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  teams=['ess','chelsea','real','barca','milan']
  est = false;
  chelsea  = true;
  etoile = false;
  show =  true;

  constructor() { }

  ngOnInit(): void {
  }

  changeteam(){
  this.etoile =  true;
  this.est=false;
  this.chelsea=false;

  }
}
