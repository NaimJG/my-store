import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  register = {
    name: "",
    email: "",
    password: ""
  }
  persona = new Persona("Naim", 25);

  onRegister() {
    console.log(this.register)
  }

  onLoaded(img: string) {
    console.log('log padre', img)
  }

}
class Persona {
  name: String;
  age: number;
  constructor(name: String, age: number) {
    this.name = name;
    this.age = age;
  }
}
