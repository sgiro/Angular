import { Personne } from './../../Model/Personne';
import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCVComponent implements OnInit {

  @Input() personne : Personne;
  @Output() selectedPerson = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  selectPersonne(){
    this.selectedPerson.emit(this.personne);
  }

}
