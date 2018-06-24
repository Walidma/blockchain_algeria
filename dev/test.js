const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();


const bc1 = {
"chain": [
{
"index": 1,
"timestamp": 1529843896644,
"transactions": [],
"nonce": 100,
"hash": "0",
"previousBlockHash": "0"
},
{
"index": 2,
"timestamp": 1529844073052,
"transactions": [],
"nonce": 18140,
"hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
"previousBlockHash": "0"
},
{
"index": 3,
"timestamp": 1529844171154,
"transactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "77b7893077ab11e8ab1e17f072c37512",
"transactionId": "e0e6436077ab11e8ab1e17f072c37512"
},
{
"amount": 10,
"sender": "moii",
"recipient": "luii",
"transactionId": "0d20e52077ac11e8ab1e17f072c37512"
},
{
"amount": 20,
"sender": "moii",
"recipient": "luii",
"transactionId": "10747cf077ac11e8ab1e17f072c37512"
},
{
"amount": 30,
"sender": "moii",
"recipient": "luii",
"transactionId": "12d1f4f077ac11e8ab1e17f072c37512"
}
],
"nonce": 38531,
"hash": "0000a4ef9afaf7862d0a5e4ee0785bfaaa09c8c57cf9bddecbf7b41550c25583",
"previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
},
{
"index": 4,
"timestamp": 1529844211422,
"transactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "77b7893077ab11e8ab1e17f072c37512",
"transactionId": "1b57cfa077ac11e8ab1e17f072c37512"
},
{
"amount": 40,
"sender": "moii",
"recipient": "luii",
"transactionId": "2728688077ac11e8ab1e17f072c37512"
},
{
"amount": 50,
"sender": "moii",
"recipient": "luii",
"transactionId": "2955cfd077ac11e8ab1e17f072c37512"
},
{
"amount": 60,
"sender": "moii",
"recipient": "luii",
"transactionId": "2b5178c077ac11e8ab1e17f072c37512"
},
{
"amount": 70,
"sender": "moii",
"recipient": "luii",
"transactionId": "2e0f604077ac11e8ab1e17f072c37512"
}
],
"nonce": 12577,
"hash": "0000a7735e1808bba0ee226e38c8b3bfc6c599b0b10c38eb19e61e555d8fdc65",
"previousBlockHash": "0000a4ef9afaf7862d0a5e4ee0785bfaaa09c8c57cf9bddecbf7b41550c25583"
},
{
"index": 5,
"timestamp": 1529844227471,
"transactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "77b7893077ab11e8ab1e17f072c37512",
"transactionId": "33579c2077ac11e8ab1e17f072c37512"
}
],
"nonce": 52327,
"hash": "000001bbf017c6927ede7a7829ac05b33214d8b5cc9c01d31ec24c5b21dc8861",
"previousBlockHash": "0000a7735e1808bba0ee226e38c8b3bfc6c599b0b10c38eb19e61e555d8fdc65"
},
{
"index": 6,
"timestamp": 1529844230905,
"transactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "77b7893077ab11e8ab1e17f072c37512",
"transactionId": "3ce8a54077ac11e8ab1e17f072c37512"
}
],
"nonce": 74580,
"hash": "0000872e10e9f1826bed83a5d67ca30936cb5165af90a200d1546a7d389f32cf",
"previousBlockHash": "000001bbf017c6927ede7a7829ac05b33214d8b5cc9c01d31ec24c5b21dc8861"
}
],
"pendingTransactions": [
{
"amount": 12.5,
"sender": "00",
"recipient": "77b7893077ab11e8ab1e17f072c37512",
"transactionId": "3ef4a1e077ac11e8ab1e17f072c37512"
}
],
"currentNodeUrl": "http://localhost:3001",
"networkNodes": []
};

console.log("Valid: " + bitcoin.chainIsValid(bc1.chain));

