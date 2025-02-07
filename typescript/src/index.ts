class AppUtils{
    static basurl:string='localhost:9000/'
    static getExpenseResource(){
        return '/expense'
    }
}

console.log(AppUtils.basurl+' '+AppUtils.getExpenseResource())

import {createExport} from './export'

import test  from './export'

test()

createExport()

let expenseId:number|string;

expenseId=24
console.log(expenseId)

expenseId='expenseid2424';
console.log(expenseId)

function trackExpenseId(expenseId:number|string){
    console.log('expense is this',expenseId)
}

trackExpenseId(2423);
trackExpenseId('234expense')