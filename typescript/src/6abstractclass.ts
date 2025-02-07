abstract class  vehicle {
    abstract vehicleName(name:string):void;

    showRoom():void{
       console.log('Welcome to showroom')
    }
}

class car extends vehicle{
   vehicleName(name: string): void {
       console.log(`vehiclename is ${name}`)
   }
}

class bike extends vehicle{
   vehicleName(name: string): void {
       console.log(`bike is ${name} `)
   }
}

let car1=new car();
car1.vehicleName('Ferrari')
car1.showRoom()

let bike1=new bike();
bike1.vehicleName('Honda')