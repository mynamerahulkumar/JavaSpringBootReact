
class MainBranch{
    accountNumber:number;

    constructor(accountNumber:number){
        this.accountNumber=accountNumber;
    }
    createAccount():void{
        console.log('Account is created',this.accountNumber)
    }
    getCarLoan():void{
        console.log('Main Branch has intereste rate of car is 12')
    }
}

class BranchOne extends MainBranch{
    constructor(acccountNumber:number){
        super(acccountNumber)
    }
    getCarLoan():void{
        console.log('Branch one has intereste rate of car is 11')
    }
}

class BranchTwo extends MainBranch{
    interestRate:number;
    constructor(accountNumber:number,interestRate:number){
        
        super(accountNumber)
        this.interestRate=interestRate;
    }
    getCarLoan(){
        console.log(`Branch Two provide carLoad at interest ${this.interestRate}`)
    }
}
let mainBranch=new MainBranch(234);
mainBranch.getCarLoan()

let branchone=new BranchOne(24234)
branchone.createAccount()
branchone.getCarLoan()
let branchTwo=new BranchTwo(2342,10.3)
branchTwo.createAccount()

branchTwo.getCarLoan()
