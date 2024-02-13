import {Component, ViewChild} from '@angular/core';
import {NavComponent} from "./components/nav/nav.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(NavComponent) navComponent: NavComponent | undefined;

  public categorySelected: String = "all";
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

  changeCategory(category: any) {
    this.categorySelected = category
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
