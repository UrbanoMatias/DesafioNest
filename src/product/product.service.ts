import { Injectable } from '@nestjs/common';
import {ProductEntity} from './product.entity'
@Injectable()
export class ProductService {
    private products:ProductEntity[] = [
        {
            id:123131,
            title:"product",
            description:"lorem",
            price:200
        }
    ]

    getProducts():ProductEntity[]{
        return this.products
    }

    saveProduct(product):ProductEntity{
        this.products.push({
            id:this.products.length+1,
            ...product
        })
        return product;
    }
}
