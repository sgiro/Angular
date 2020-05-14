import { Personne } from './../Model/Personne';
import { CvService } from './../cvTech/cv.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  personne: Personne;
  constructor(private activatedRouter : ActivatedRoute,
              private CvService: CvService,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(
      (params) => {
          this.CvService.getPersonneById(params.id).subscribe(
           (personne) => {
             this.personne=personne;
           }
         )

      }
    );
 }
  deletePersonne(){
    this.CvService.deletePersonne(this.personne.id).subscribe(
      (response) => {
        const link =['cv'];
        this.router.navigate(link);
      },
      (error) =>{
        console.log(error);
      }
    )
  }

  updatePersonne( id: number){

    const link=['cv/updateCv', id]
    this.router.navigate(link);
  }
}
