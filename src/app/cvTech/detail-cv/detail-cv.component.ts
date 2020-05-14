import { EmbaucheService } from './../embauche.service';
import { Personne } from './../../Model/Personne';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCVComponent implements OnInit {

  @Input() personne :Personne;

  constructor(private route : Router, private Embaucheservice :EmbaucheService) { }

  ngOnInit(): void {

  }

  Embaucher(){
    this.Embaucheservice.EmbaucherPersonne(this.personne);
  }

  moreInfo(){
    const link = ['cv', this.personne.id];
    this.route.navigate(link);
  }
}
