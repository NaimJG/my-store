import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { StoreService } from '../../services/store.service'
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  @Output() public categorySelected = new EventEmitter<any>();
  public sendCategory: String = "";

  activeMenu = false;
  counter = 0;
  constructor(
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length;
    })
  }

  toggleMenu(){
    this.activeMenu = !this.activeMenu
  }
  changeCategory(category: String){
    this.sendCategory = category;
    this.categorySelected.emit(this.sendCategory)
  }

}
