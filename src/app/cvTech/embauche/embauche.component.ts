import { EmbaucheService } from './../embauche.service';
import { Personne } from './../../Model/Personne';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit {

  personnes : Personne[];
  constructor( private Embaucheservice : EmbaucheService) { }

  ngOnInit(): void {
    this.personnes = this.Embaucheservice.getEmbauchees();
  }

}
