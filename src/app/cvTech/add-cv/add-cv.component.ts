import { Router } from '@angular/router';
import { CvService } from './../cv.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCvComponent implements OnInit {

  errormsg='';
  constructor( private router :Router, private Cvservice : CvService) { }

  ngOnInit(): void {
  }


  addPersonne(formulaire : NgForm)
  {
    this.Cvservice.AddPersonne(formulaire.value).subscribe(
      (response) => {
        const link = ['cv'];
        this.router.navigate(link);      },
      (error) =>{
        this.errormsg =`Problème de connexion à votre serveur. veuillez consulter votre administrateur`
        console.log(error);
      }
    )
  }
}
