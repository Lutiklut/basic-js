const { NotImplementedError } = require('../extensions/index.js');
//const directMachine = new VigenereCipheringMachine();

//const reverseMachine = new VigenereCipheringMachine(false);
/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 const directMachine = new VigenereCipheringMachine();
 * 
 const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(cod) {
    this.words = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    this.cod = cod || cod === undefined;
  }
  encrypt(message,key) {
    if(!message||!key){throw new Error('Incorrect arguments!')}
    let index = 0;
    let res = "";
    message = message.toUpperCase();
    key  = key.toUpperCase();

    for (let i = 0; i < message.length; i++) {
      if (!this.words.includes(message[i])) {
        res += message[i];
        continue;
      }
      const newMessage = this.words.indexOf(message[i]);
      const codeKey = this.words.indexOf(key[index++ % key.length]);
      const encryptCode = (newMessage + codeKey) % this.words.length;
      res += this.words[encryptCode];
    }
    return this.cod ? res : res.split('').reverse().join('');

	}

  decrypt(encryptedMessage,key) {
    if(!encryptedMessage||!key){throw new Error('Incorrect arguments!')}

    let index = 0;
    let res = "";
    
    key=key.toUpperCase();
    encryptedMessage=encryptedMessage.toUpperCase();
    for (let i = 0; i < encryptedMessage.length; i++) {
      if (!this.words.includes(encryptedMessage[i])) {
        res += encryptedMessage[i];
        continue;
      }

      const code = this.words.indexOf(encryptedMessage[i]);
      const codeKey = this.words.indexOf(key[index++ % key.length]);
      const deCode = code - codeKey % this.words.length;

      if (deCode < 0)
      res += this.words[this.words.length + deCode];
      else
      res += this.words[deCode];
    }
    return this.cod ? res : res.split('').reverse().join('');
  }
}

     


module.exports = {
  VigenereCipheringMachine
};
