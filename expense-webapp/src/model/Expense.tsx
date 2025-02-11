export default interface Expense{
    id:number;
    expenseId?:string;// optional
    name:string;
    note:string;
    amount:number;
    date:string;
    category:string;

}