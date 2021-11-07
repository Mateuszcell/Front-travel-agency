export class newTravel{
public description: string;
public price: number;
public destination: string;
public img: string;


  constructor(description: string, price: number, destination: string, img: string) {
    this.description = description;
    this.price = price;
    this.destination = destination;
    this.img = img;
  }
}
