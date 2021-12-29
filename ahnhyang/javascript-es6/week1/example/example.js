'use strict';

// WeakMap, WeakSet
// Map, Set 과 비슷하나 객체 참조카운트가 증가되지 않음. => 약한 참조

// WeakMap 메서드 <- 매우 단조로움
// - get(key), 
// - set(key, value), 
// - delete(key), 
// - has(key) 

// Map과는 달리 '객체'로만 키 할당이 가능.

// WeakMap
// 기존Map에 set(obj)후, obj 사용이 끝난다면 obj 및 Map 참조값를 끊어줘야함.(메모리 낭비 막기위함)
// WeakMap 사용할시 obj = null 이 되면 
// WeakMap <-> obj간 참조가 끊어지기 때문에 가비지컬렉션에 의해 Weakmap에 있는 객체도 정리
// 따라서 Map처럼 수동으로 참조를 끊지 않아도된다.


// 사용 예시)

// 외부 API (ex. 회원)을 불러와 추가로 정보를 담아 사용할때,
// 외부 API 회원이 탈퇴할 경우 
// Map을 사용하면 회원이 탈퇴해도 참조가 남아있어 메모리를 낭비하게 됨.
// 이럴경우 Weakmap을 사용하면 객체가 사라지면 모든 참조가 끊어져 메모리 낭비를 막을 수 있다.

let cookie = {
    'name': 'main_popup',
    'value': '1',
    'expire_date': '2021-11-30',
};

function createCookie() {
    let cookies = new WeakMap();

    if (!cookies.has(cookie)) {
        cookies.set(cookie, cookie);
    }

    const func = function () {
        return cookies; //return WeakMap
    };

    return func;
}

let getCookie = createCookie();

let timer = () => {
    setTimeout(function request() {
        if (cookie) {
            let weakmap = getCookie();
            console.log(weakmap);   // Weakmap {{obj} => {obj}}
            cookie = null;  // 쿠키객체 삭제, 
            timer = setTimeout(request, 5000);
        } else {
            let weakmap2 = getCookie();
            console.log(weakmap2);  // Weakmap {}  < 빈 WeakMap객체
        }
    }, 3000);
};

timer();
