export class Product{
    productId: number
    name: string
    price: number

    constructor(name: string, price: number){

        if(price < 0){
            throw new Error("El precio no puede ser negativo")
        }


        this.productId = -1;
        this.name = name;
        this.price = price;
    }
}