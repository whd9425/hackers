//iterate : (계산, 컴퓨터 처리 절차를) 반복하다
//iterator : 반복자
//프로그래밍에서 반복기는 개발자가 컨테이너, 특히 객체 순회할 수 있게 해주는 객체

//Array.from() - 유사배열
//... 전개연산자(Spread)
//해체할당
//for..of

//iterator 은 객체를 next 메서드로 순환 할 수 있는 객체다.
//iterator는 next() 메소드를 가지고 있고, next 메소드는 아래의 규칙에 따라 구현되어야 한다.
//next 메소드는 arguments 가 없다.
//next 메소드의 반환자는 done: boolean 과 value: any 를 포함하는 object 를 반환해야 한다.
//next 메소드의 반복이 끝날때 done 은 true 를 반환해야 한다.

//for..of가 시작되자마자 for..of는 Symbol.iterator를 호출(Symbol.iterator가 없으면 에러가 발생)
//Symbol.iterator는 반드시 이터레이터(iterator, 메서드 next가 있는 객체) 를 반환해야 함


//일반객체를 iterate 하게 만들기
let obj = {
    'start' : 1,
    'end' : 50
};

//iterator custom 객체
const Iterator = () => { 
    return {
        start : obj.start,
        end : obj.end,
        next : function() {
            if(this.start <= this.end){
                current = this.start%2 ? undefined : this.start;
                this.start++;
                return {done: false, value: current}
            } 
            return {done : true}
        }
    }
}

obj[Symbol.iterator] = Iterator; 
console.log(obj);
console.log('[Iterator]', [...obj].filter(Boolean));

//Iterable 한 generater객체 
const Generator = function* () {
    for (i = obj.start; i <= obj.end; i++) {
        if ( i % 2 == 0) yield i;
    }
};

obj[Symbol.iterator] = Generator; 

console.log(obj);
console.log('[Generator]',[...obj]);

//결론 : Generator 함수가 반환하는 객체는 곧 Iterator 객체 자신이며, Generator를 실행하는 것은 곧 Iterator를 실행하는 것


