enum Shoes {
    Nike = '나이키',
    Adidas = '아디다스'
}

var myShoes = Shoes.Nike;
console.log(myShoes); //나이키


enum Answer {
    Yes = 'Y',
    No = 'N'
}
function askQuestion(answer: Answer){
    if(answer === Answer.Yes){
        console.log('정답입니다.')
    }
    if(answer === Answer.No){
        console.log('오답입니다.')
    }
}

// askQuestion('예스');
// askQuestion('y');
// askQuestion('Yes');
askQuestion(Answer.Yes);