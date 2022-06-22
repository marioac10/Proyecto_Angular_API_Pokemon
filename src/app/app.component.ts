import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'AngularApi';
  result:number=0;
  a:number = 0;
  b:number = 0;
  public Sumar(){
    this.result = this.a + this.b;
    alert(this.result);
  }
}
