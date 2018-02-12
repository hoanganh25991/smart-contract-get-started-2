/* Quick connect to web3 */
const Web3 = require("web3");
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const eth  = web3.eth; 
const balance = eth.getBalance("0xc73bA89c340a5839473b2486fbf3af479Aa8e620");
/* Log out balance */
console.log("[balance]", balance);
