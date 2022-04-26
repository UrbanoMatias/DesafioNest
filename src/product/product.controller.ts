import { Body, Controller, Get, Post } from '@nestjs/common';
import {ProductService} from "./product.service";
import {ProductEntity} from "./product.entity";

@Controller('product')
export class ProductController {
    constructor(private productService:ProductService){}

    @Get()
    getAll():ProductEntity[]{
        return this.productService.getProducts();
    }
    @Post()
    createProduct(@Body() body):ProductEntity{
        return this.productService.saveProduct(body)
    }
}
