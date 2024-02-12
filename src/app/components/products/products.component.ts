import { Component } from '@angular/core';
import { Product } from "../../models/product.model";
import { CreateProductDTO, UpdateProductDTO } from "../../models/product.model";
import { StoreService } from '../../services/store.service'
import { ProductService } from '../../services/product.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  total: number = 0;
  myShoppingCart: Product[] = [];

  products: Product[] = [];

  showProductDetail = false;

  productChosen: Product = {
    id: '',
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: {
      rate: 0,
      count: 0,
    }
  }

  today = new Date();
  date = new Date(2021, 1, 21)

  constructor(
    private storeService: StoreService,
    private productsService: ProductService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(data => {
      this.products = data;
    })
  }

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail
  }

  onShowDetail(id: string) {
    this.productsService.getProduct(id).subscribe(data => {
      this.toggleProductDetail();
      this.productChosen = data;
    })
  }

  createNewProduct() {
    const product: CreateProductDTO = {
      title: 'Nuevo producto',
      price: Math.random(),
      description: 'bla bla bla bla bla bla',
      category: 'clothes',
      image: 'https://i.pravatar.cc',
      rating: {
        rate: Math.random(),
        count: Math.random(),
      }
    }
    this.productsService.create(product).subscribe(data => {
      this.products.unshift(data)
    });
  }

  updateProduct() {
    const changes: UpdateProductDTO = {
      title: 'change title',
    }
    const id = this.productChosen.id;
    this.productsService.update(id, changes)
      .subscribe(data => {
        const productIndex = this.products.findIndex(item => item.id === this.productChosen.id);
        this.products[productIndex] = data;
        this.productChosen = data;
      })
  }

  deleteProduct() {
    const id = this.productChosen.id;
    this.productsService.delete(id).subscribe( () => {
      const productIndex = this.products.findIndex(item => item.id === this.productChosen.id);
      this.products.splice(productIndex, 1);
      this.showProductDetail = false;
    })
  }

}
