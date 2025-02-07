class AtmMachine{
    name:string;
    accountNumber:number;
    balance:number;
 
    checkBalance():number{
     return this.balance;
    }
 
    constructor(name:string,accountNumber:number,balance:number){
     this.accountNumber=accountNumber;
     this.balance=balance;
     this.name=name;
    }
 
 }
 
 let sbiMachine=new AtmMachine('Bushan',123124,23423.00)
 
 console.log(sbiMachine.checkBalance())
 console.log(sbiMachine)
 
 let hdFcMachine=new AtmMachine('Rahul',234,234234234234)
 console.log(hdFcMachine)