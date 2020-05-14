import { Router } from '@angular/router';
import { CvService } from './../cv.service';
import { Personne } from './../../Model/Personne';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  chaine ='';
  searchresult : Personne[];
  constructor( private CvService: CvService,
               private router: Router) { }

  ngOnInit(): void {
    this.searchresult=[];
  }
  search(){
    const name =this.chaine.trim();
    if(name.length){
      this.CvService.findbyName(name).subscribe(
        (personnes) =>{
        this.searchresult = personnes;
        }
      )
    }
    else{
      this.searchresult=[];
    }
  }
selectPersonne(personne:Personne){
const link=['cv',personne.id];
this.router.navigate(link);
this.searchresult=[];
this.chaine='';
}
}
