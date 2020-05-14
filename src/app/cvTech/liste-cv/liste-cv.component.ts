import { Personne } from './../../Model/Personne';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-liste-cv',
  templateUrl: './liste-cv.component.html',
  styleUrls: ['./liste-cv.component.css']
})
export class ListeCVComponent implements OnInit {

  @Input() Personnes : Personne[];
  @Output() selectedPerson = new  EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

 selectPersonne(selectedPerson){

 this.selectedPerson.emit(selectedPerson)
 };

}
