import { CvService } from './../cv.service';
import { PremierService } from './../../premier.service';
import { Personne } from './../../Model/Personne';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent implements OnInit {

  Personnes : Personne[];
  selectedPerson : Personne;
  constructor(private Cvservice  : CvService) { }

  ngOnInit(){
    this.Cvservice.getPersonne().subscribe(
      (personnes) => {
        this.Personnes = personnes;
      },
      (error) => {
        alert('problème d\'accès à l api');
        console.log(error);
      }

    );
   }

   selectPersonne(personne){
    this.selectedPerson= personne;
        }
}
