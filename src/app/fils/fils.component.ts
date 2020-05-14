import { Component,EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
 @Input() filsProprety;
 @Output() SendRequestToData= new EventEmitter();
  constructor() { }

  ngOnInit(): void {

    console.log('color fils' , this.filsProprety);
  }


  SendEvent() {
    this.SendRequestToData.emit(
       `send money`
    );
  }
}
