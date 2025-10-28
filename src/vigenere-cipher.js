const { NotImplementedError } = require("../lib");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
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
  constructor(modification = true) {
    this.modification = modification;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw Error("Incorrect arguments!");
    }

    let str = [];
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const alphabetArr = alphabet.split("");

    // Create keyword of length equal to message
    let messageArr = message.toUpperCase().split("");
    let keyArr = key.toUpperCase().split("");
    let keyMessageArr = [];
    let pass = 0;

    for (let i = 0; i < messageArr.length; i++) {
      if (alphabetArr.includes(messageArr[i])) {
        let character = keyArr[(i - pass) % keyArr.length];
        keyMessageArr.push(character);
      } else {
        keyMessageArr.push(messageArr[i]);
        pass += 1;
      }
    }

    // Encrypt message by keyword
    for (let i = 0; i < messageArr.length; i++) {
      let original = alphabetArr.indexOf(messageArr[i]);
      let shift = alphabetArr.indexOf(keyMessageArr[i]);

      if (original === -1) {
        str.push(messageArr[i]);
      } else {
        let encryptedIndex = (original + shift) % alphabetArr.length;
        let encrypted = alphabetArr[encryptedIndex];
        str.push(encrypted);
      }
    }

    return this.modification ? str.join("") : str.reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw Error("Incorrect arguments!");
    }

    let str = [];
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const alphabetArr = alphabet.split("");

    // Create keyword of length equal to message
    let messageArr = encryptedMessage.toUpperCase().split("");
    let keyArr = key.toUpperCase().split("");
    let keyMessageArr = [];
    let pass = 0;

    for (let i = 0; i < messageArr.length; i++) {
      if (alphabetArr.includes(messageArr[i])) {
        let character = keyArr[(i - pass) % keyArr.length];
        keyMessageArr.push(character);
      } else {
        keyMessageArr.push(messageArr[i]);
        pass += 1;
      }
    }

    // Decrypt message by keyword
    for (let i = 0; i < messageArr.length; i++) {
      let encrypted = alphabetArr.indexOf(messageArr[i]);
      let shift = alphabetArr.indexOf(keyMessageArr[i]);

      if (encrypted === -1) {
        str.push(messageArr[i]);
      } else {
        let originalIndex =
          (encrypted - shift + alphabetArr.length) % alphabetArr.length;
        let original = alphabetArr[originalIndex];
        str.push(original);
      }
    }

    return this.modification ? str.join("") : str.reverse().join("");
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
