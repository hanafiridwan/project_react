import _ from 'lodash';

export function paginate(items, pageNumber, pageSize){
    const startIndex = (pageNumber - 1) * pageSize; //logic ini digunakan untuk melihat kalau misalkan posisinya ada start nya.
    return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value(); //value() ini berguna untuk menyesuaikan pagination agar sesuai keinginan user misal user mau ke pagination 1 atau 2, maka ini akan disesuaikan.
}