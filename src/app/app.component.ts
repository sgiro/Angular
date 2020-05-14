import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formaAngular2019';
  bgColor = 'red';
  show = false;

  ChangeStatus(){

    this.show = !this.show;

  }
}
