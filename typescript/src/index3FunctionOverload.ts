function log(value:string):void;
function log(value:object):void;
function log(value:number):void;

function log(value:any):void{
    if(typeof value==='string'){
        console.log('value is type of string')
    }
    else if(typeof value==='number'){
        console.log(`API values is ${value}`)
    }
    else{
        console.log(JSON.stringify(value))
    }
}

log('Rahul')
log(3)
log({name:'Rahul',age:23})