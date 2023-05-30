

export class Products{
  public cijena:number;
  public des:string;
  public name:string;
  public id:number;
  public type:string;
  public imgPath:string;

  constructor(Cijena:number = 0,  description:string = '',  Name:string = '', Id:number = 0, Type:string = '',
  img:string ='') {
    this.cijena = Cijena;
    this.des = description;
    this.name = Name;
    this.id = Id;
    this.type = Type;
    this.imgPath = img;
  }
}
