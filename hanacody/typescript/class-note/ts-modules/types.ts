// export interface Todo {
//     title : string;
//     checked : boolean;
// }

enum PhoneType {
    home = 'home',
    office = 'office',
    studio = 'studio'
}

interface PhoneNumberDictionary {
    [phone: string]: {
        num: number;
    };
}

interface Contact {
    name: string;
    address: string;
    phones: PhoneNumberDictionary;
}

export {
    Contact, PhoneType
}