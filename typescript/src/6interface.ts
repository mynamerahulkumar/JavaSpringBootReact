interface Bank{
    accountNumber?:number;
    customerName:string;
    checkBalance():void;
}

let bankObject:Bank={
    customerName:'Rahul',
    checkBalance(){
        console.log('checking the balance')
    }
}

bankObject.checkBalance()
console.log(`name is ${bankObject.customerName}`)