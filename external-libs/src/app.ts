// import _ from 'lodash';
//
// // this variable will exist
// declare var GLOBAL: string;
//
// console.log(_.shuffle([1,2,3]));
//
// console.log(GLOBAL);
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {validate} from 'class-validator';

import {Product} from './product.model';

const products = [{title: 'A Carpet', price: 29.99}, {title: 'A Book', price: 10.99}];

const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
    console.log(prod.getInformation());
}

const p1 = new Product('', -5);
validate(p1).then(errors => {
    if (errors.length > 0) {
        console.log('VALIDATION ERRORS!');
        console.log(errors);
    } else {
        console.log(p1.getInformation());
    }
});
