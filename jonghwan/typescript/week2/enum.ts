enum Shose {
    Nike,
    Adidas
}

var myShoes = Shose.Nike;
console.log(myShoes); //0 숫자형


enum Shose2 {
    Nike = '나이키',
    Adidas ='아디다스'
}

var myShoes2 = Shose2.Nike;
console.log(myShoes2); //나이키

//예제

enum Anser{
    Yes = 'y',
    No = 'N',
}

function askQuestion(answer: Anser){

    if(answer === Anser.Yes){
        console.log('정답')
    }
    if(answer === Anser.No){
        console.log('오답')
    }
}

askQuestion(Anser.Yes)
//askQuestion('Yes')

// askQuestion('예스');
// askQuestion('y');
// askQuestion('Yes');
