var PhoneType;
(function (PhoneType) {
    PhoneType["Home"] = "home";
    PhoneType["Office"] = "office";
    PhoneType["Studio"] = "studio";
})(PhoneType || (PhoneType = {}));
// api
// TODO: 아래 함수의 반환 타입을 지정해보세요.
function fetchContacts() {
    // TODO: 아래 변수의 타입을 지정해보세요.
    var contacts = [
        {
            name: 'Tony',
            address: 'Malibu',
            phones: {
                home: {
                    num: 11122223333
                },
                office: {
                    num: 44455556666
                }
            }
        },
        {
            name: 'Banner',
            address: 'New York',
            phones: {
                home: {
                    num: 77788889999
                }
            }
        },
        {
            name: '마동석',
            address: '서울시 강남구',
            phones: {
                home: {
                    num: 213423452
                },
                studio: {
                    num: 314882045
                }
            }
        },
    ];
    return new Promise(function (resolve) {
        setTimeout(function () { return resolve(contacts); }, 2000);
    });
}
// main
var AddressBook = /** @class */ (function () {
    function AddressBook() {
        // TODO: 아래 변수의 타입을 지정해보세요.
        this.contacts = [];
        // constructor는 기본적인 타입 정의 되지않게 되어있기에 따로 선언 안함
        this.fetchData();
    }
    AddressBook.prototype.fetchData = function () {
        var _this = this;
        // 반환값 없음
        fetchContacts().then(function (response) {
            _this.contacts = response;
        });
    };
    /* TODO: 아래 함수들의 파라미터 타입과 반환 타입을 지정해보세요 */
    AddressBook.prototype.findContactByName = function (name) {
        // 이름을 가지고 전화번호를 찾는다
        return this.contacts.filter(function (contact) { return contact.name === name; });
    };
    AddressBook.prototype.findContactByAddress = function (address) {
        return this.contacts.filter(function (contact) { return contact.address === address; });
    };
    // home, office, studio
    AddressBook.prototype.findContactByPhone = function (phoneNumber, phoneType) {
        return this.contacts.filter(function (contact) { return contact.phones[phoneType].num === phoneNumber; });
    };
    // 변수명으로 했다가 오타
    // findContactByPhone('offfice');
    // 타입 집어넣어서 안틀리게(.누르면 home, office,studio 뜸)
    // findContactByPhone(PhoneType.phone); //위 constructor에 넣으면 됨
    AddressBook.prototype.addContact = function (contact) {
        this.contacts.push(contact);
    };
    AddressBook.prototype.displayListByName = function () {
        return this.contacts.map(function (contact) { return contact.name; });
    };
    AddressBook.prototype.displayListByAddress = function () {
        return this.contacts.map(function (contact) { return contact.address; });
    };
    return AddressBook;
}());
var heroes = [
    { name: 'Tony', age: 30 },
    { name: 'Captain', age: 100 }
];
heroes.map(function (hero) {
    return hero.name;
}); // ['Tony', 'captain']만 출력됨
new AddressBook();
