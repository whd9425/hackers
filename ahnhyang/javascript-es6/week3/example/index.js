"use strict";

/** 
@description
회원 정보 > 회원 등급 , 회원 등급별 혜택
차례대로 호출되는 Promise & asynk await 예제.
폼에 회원 이름을 입력하면 회원가입 여부를 먼저 체크한 뒤,
해당 회원 등급에 맞는 혜택을 가져와 뿌려준다.
**/

class UserBenefit {
    constructor(name) {
        this.name = name;
    }

    printArr(benefits) {
        alert(`혜택이 제공 되었습니다!`);

        const ul = document.getElementById('benefit_list');
        ul.innerHTML = '';

        for (let benefit of benefits) {
            const _li = document.createElement('li');

            _li.innerHTML = Object.values(benefit);
            ul.appendChild(_li);
        }
    }

    fetchData(url) {
        return fetch(url).then((res) => res.json());
    }

    async loadUserBenefit() {
        try {
            let result;
            const users = await this.fetchData('./User.json');  // 회원정보를 불러온다.
            const user = users.find(user => user.NAME === this.name); // 입력한 회원 정보가 있는지 비교한다.

            if (!user) { // 회원이 아닐경우
                alert('비회원은 회원가입 후 이용 가능합니다.'); 
                result = false;
            } else {
                await Promise.all([ // 회원 등급, 등급 혜택을 불러온다. (Promise.all)
                    this.fetchData('./Grade.json'),
                    this.fetchData('./Benefit.json')
                ])
                .then(responses => {    // 불러온 회원 등급을 해당 회원번호로 매칭한다.
                    const grade = responses[0].find(grade => grade.MEMBER_NO === user.MEMBER_NO);
                    const benefit = responses[1].filter(benefit =>
                        Object.keys(benefit).includes(grade.GRADE)
                    );
                    result = benefit; // 혜택 반환
                });
            }

            return result;
        } catch (error) {
            alert(error);
        }
    }
}


const btnSubmit = document.querySelector('button');

btnSubmit.addEventListener('click', e => {
    e.preventDefault();

    const name = document.getElementById('name').value;

    if (!name) {
        alert('이름을 입력해주세요!');
        return false;
    }

    let userBenefit = new UserBenefit(name);
    
    userBenefit.loadUserBenefit()
    .then(res => {
        if(res) userBenefit.printArr(res);
    });
});
