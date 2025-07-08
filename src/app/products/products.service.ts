import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Product } from '../../../shared/Models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private data: Product[] = [
    { tag: "Food",    id: 1,  name: "Pizza",          price: 12,   imageUrl: "Pizza.jpeg" },
    { tag: "Music",   id: 2,  name: "Flute",          price: 700,  imageUrl: "Flute.jpeg" },
    { tag: "Decor",   id: 3,  name: "Wall Art",       price: 50,   imageUrl: "WallArt.jpeg" },
    { tag: "Tools",   id: 4,  name: "Level",          price: 22,   imageUrl: "Level.jpeg" },
    { tag: "Toys",    id: 5,  name: "RC Helicopter",  price: 70,   imageUrl: "RCHelicopter.jpeg" },
    { tag: "Music",   id: 6,  name: "Piano",          price: 5000, imageUrl: "Piano.jpeg" },
    { tag: "Toys",    id: 7,  name: "Teddy Bear",     price: 25,   imageUrl: "TeddyBear.jpeg" },
    { tag: "Clothing",id: 8,  name: "Hat",            price: 20,   imageUrl: "Hat.jpeg" },
    { tag: "Music",   id: 9,  name: "Clarinet",       price: 1400, imageUrl: "Clarinet.jpeg" },
    { tag: "Decor",   id: 10, name: "Throw Pillow",   price: 20,   imageUrl: "Pillow.jpeg" },
    { tag: "Tools",   id: 11, name: "Chisel",         price: 12,   imageUrl: "Chisel.jpeg" },
    { tag: "Music",   id: 12, name: "Bongos",         price: 1050, imageUrl: "Bongos.jpeg" },
    { tag: "Food",    id: 13, name: "Steak",          price: 20,   imageUrl: "Steak.jpeg" },
    { tag: "Clothing",id: 14, name: "Jeans",          price: 60,   imageUrl: "Jeans.jpeg" },
    { tag: "Decor",   id: 15, name: "Clock",          price: 30,   imageUrl: "Clock.jpeg" },
    { tag: "Tools",   id: 16, name: "Screwdriver",    price: 15,   imageUrl: "Screwdriver.jpeg" },
    { tag: "Toys",    id: 17, name: "Action Figure",  price: 20,   imageUrl: "ActionFigure.jpeg" },
    { tag: "Clothing",id: 18, name: "Dress",          price: 80,   imageUrl: "Dress.jpeg" },
    { tag: "Music",   id: 19, name: "Saxophone",      price: 1800, imageUrl: "Saxophone.jpeg" },
    { tag: "Food",    id: 20, name: "Pasta",          price: 10,   imageUrl: "Pasta.jpeg" },
    { tag: "Food",    id: 21, name: "Cheese",         price: 5,    imageUrl: "Cheese.jpeg" },
    { tag: "Tools",   id: 22, name: "Tape Measure",   price: 10,   imageUrl: "TapeMeasure.jpeg" },
    { tag: "Toys",    id: 23, name: "Board Game",     price: 35,   imageUrl: "BoardGame.jpeg" },
    { tag: "Music",   id: 24, name: "Guitar",         price: 1000, imageUrl: "Guitar.jpeg" },
    { tag: "Clothing",id: 25, name: "Sweater",        price: 55,   imageUrl: "Sweater.jpeg" },
    { tag: "Decor",   id: 26, name: "Planter",        price: 18,   imageUrl: "Planter.jpeg" },
    { tag: "Clothing",id: 27, name: "T-Shirt",        price: 25,   imageUrl: "TShirt.jpeg" },
    { tag: "Toys",    id: 28, name: "Stuffed Bunny",  price: 22,   imageUrl: "StuffedBunny.jpeg" },
    { tag: "Decor",   id: 29, name: "Table Lamp",     price: 35,   imageUrl: "Lamp.jpeg" },
    { tag: "Music",   id: 30, name: "Drums",          price: 1200, imageUrl: "Drums.jpeg" },
    { tag: "Clothing",id: 31, name: "Sneakers",       price: 90,   imageUrl: "Sneakers.jpeg" },
    { tag: "Tools",   id: 32, name: "Hammer",         price: 25,   imageUrl: "Hammer.jpeg" },
    { tag: "Decor",   id: 33, name: "Curtains",       price: 60,   imageUrl: "Curtains.jpeg" },
    { tag: "Tools",   id: 34, name: "Sander",         price: 80,   imageUrl: "Sander.jpeg" },
    { tag: "Food",    id: 35, name: "Burger",         price: 9,    imageUrl: "Burger.jpeg" },
    { tag: "Toys",    id: 36, name: "Yo-Yo",          price: 8,    imageUrl: "Yoyo.jpeg" },
    { tag: "Tools",   id: 37, name: "Cordless Drill", price: 120,  imageUrl: "CordlessDrill.jpeg" },
    { tag: "Toys",    id: 38, name: "Dollhouse",      price: 80,   imageUrl: "Dollhouse.jpeg" },
    { tag: "Clothing",id: 39, name: "Jacket",         price: 120,  imageUrl: "Jacket.jpeg" },
    { tag: "Music",   id: 40, name: "Oboe",           price: 1125, imageUrl: "Oboe.jpeg" },
    { tag: "Decor",   id: 41, name: "Rug",            price: 75,   imageUrl: "Rug.jpeg" },
    { tag: "Tools",   id: 42, name: "Circular Saw",   price: 150,  imageUrl: "CircularSaw.jpeg" },
    { tag: "Food",    id: 43, name: "Bread",          price: 3,    imageUrl: "Bread.jpeg" },
    { tag: "Music",   id: 44, name: "Violin",         price: 900,  imageUrl: "Violin.jpeg" },
    { tag: "Toys",    id: 45, name: "Puzzle",         price: 10,   imageUrl: "Puzzle.jpeg" },
    { tag: "Tools",   id: 46, name: "Pliers",         price: 18,   imageUrl: "Pliers.jpeg" },
    { tag: "Food",    id: 47, name: "Sushi",          price: 15,   imageUrl: "Sushi.jpeg" },
    { tag: "Clothing",id: 48, name: "Shorts",         price: 35,   imageUrl: "Shorts.jpeg" },
    { tag: "Decor",   id: 49, name: "Candle Holder",  price: 15,   imageUrl: "CandleHolder.jpeg" },
    { tag: "Clothing",id: 50, name: "Hoodie",         price: 45,   imageUrl: "Hoodie.jpeg" },
    { tag: "Music",   id: 51, name: "Banjo",          price: 950,  imageUrl: "Banjo.jpeg" },
    { tag: "Toys",    id: 52, name: "Lego Set",       price: 60,   imageUrl: "Lego.jpeg" },
    { tag: "Decor",   id: 53, name: "Vase",           price: 25,   imageUrl: "Vase.jpeg" },
    { tag: "Tools",   id: 54, name: "Wrench",         price: 20,   imageUrl: "Wrench.jpeg" },
    { tag: "Food",    id: 55, name: "Apple",          price: 1,    imageUrl: "Apple.jpeg" },
    { tag: "Clothing",id: 56, name: "Boots",          price: 110,  imageUrl: "Boots.jpeg" },
    { tag: "Decor",   id: 57, name: "Mirror",         price: 45,   imageUrl: "Mirror.jpeg" },
    { tag: "Food",    id: 58, name: "Salad",          price: 8,    imageUrl: "Salad.jpeg" },
    { tag: "Food",    id: 59, name: "Ice Cream",      price: 6,    imageUrl: "IceCream.jpeg" },
    { tag: "Toys",    id: 60, name: "Toy Car",        price: 15,   imageUrl: "ToyCar.jpeg" }
  ];

  constructor() { }

  getAllProducts() {
    return of(this.data);
  }

  getProduct(id: number) {
    return of(this.data.find(p => p.id == id));
  }
}
