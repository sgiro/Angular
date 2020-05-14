import { CvService } from './../cv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from './../../Model/Personne';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-cv',
  templateUrl: './update-cv.component.html',
  styleUrls: ['./update-cv.component.css']
})
export class UpdateCvComponent implements OnInit {

  personne : Personne =null;
  constructor(
    private activatedRoute : ActivatedRoute,
    private CvService:  CvService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
          this.CvService.getPersonneById(params.id).subscribe(
           (personne) => {
             this.personne=personne;
           }
         )

      }
    );
  }
  updatePersonne(){
this.CvService.updatePersonne(this.personne).subscribe(
(response) =>  {
  const link = ['cv'];
  this.router.navigate(link);
}
);
  }
}
