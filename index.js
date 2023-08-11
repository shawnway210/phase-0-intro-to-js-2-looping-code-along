const names = [ "Porter", "Ari", "Sandra" ];
function writeCards(names, event){
    const newArray= []
    for (let i = 0; i < names.length; i++){
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return newArray;
}
writeCards(names);


const numbers = ["10","9","8", "7", "6", "5", "4", "3","2", "1","0"]
function countDown(){
    let countDown=0;
    while(countDown< 11){
        console.log(countDown++);
    }
}