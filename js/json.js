//JavaScript Object Notation ba JSON
// const user = {id: 11, name: "gorib amir", job: "actor"};
// const stringified = JSON.stringify(user);
// console.log(stringified);
// console.log(user);

/*
json datar kaj holo kono akta server theke ba website er api er maddhome data load kore nijer website a load kora... abar kono web site er data jodi undefined thake sekhetre load kora possible hoy na
*/

const shop = {
    name: 'alia store',
    address: 'ranbir road',
    profit: 15000,
    products: ['laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'alia bhatt',
        profession: 'actor',
    },
    isExpensive: false
};

// object ke stringify kora hoice
const shopStringified = JSON.stringify(shop);
console.log(shopStringified);
// console.log(shop);

// string ke js object kora hoice
const converted = JSON.parse(shopStringified);
console.log(converted);
