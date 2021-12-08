//new Promise()로 프로미스를 생성하고 종료될 때까지 3가지 상태를 갖습니다.
//Pending(대기) : 비동기 처리 로직이 아직 완료되지 않은 상태
//Fulfilled(이행) : 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태
//Rejected(실패) : 비동기 처리가 실패하거나 오류가 발생한 상태

class UserStorage {
    //loginUser(id, pw, onSuccess, onError) {
    loginUser(id, pw) {
        return new Promise((onSuccess, onError) => {
            //비동기 콜백 1초뒤 Pending => Fulfilled or Rejected
            setTimeout(() => {
                if((id === 'Id' && pw === 'password') || (id === 'hackers' && pw === '1234')) {
                    onSuccess(id);
                }
                onError(new Error('not found'));
            }, 1000)
        });
    }

    //getTeam(user, onSuccess, onError) {
    getTeam(id) {
        return new Promise((onSuccess, onError) => {
            setTimeout(() => {
                if(id === 'Id') {
                    onSuccess({
                        name : 'Pro',
                        team : 'web development'
                    });
                }
                if(id === 'hackers') {
                    onSuccess({
                        name : 'hackers',
                        team : 'module'
                    });
                }
                onError(new Error('no access'));
            }, 1000)
        })
    }

    returnToMsg(result) {
        alert(`Hello ${result.name}, You're on the ${result.team} team`)
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id', 'hackers');
const password = prompt('enter your password', '1234');

/*
userStorage.loginUser(
    id, 
    password, 
    user => {
        userStorage.getTeam(
            user, 
            userWidtteam => {
                alert(`Hello ${userWidtteam.name}, You're on the ${userWidtteam.team} team`)
            },
            error => {
                alert(error);
            }
        )
    },
    error => {
        alert(error);
    }
)
*/

//Promise chaining
userStorage
    .loginUser(id, password)
    .then(result => userStorage.getTeam(result))
    .then(result => userStorage.returnToMsg(result))
    .catch(err => alert(err))
    .finally(() => console.log('end'))

