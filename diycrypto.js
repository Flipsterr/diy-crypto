

const charCodes = []
export function ceasarEncrypt(msg, shift) {
    
    for (let i = 0; i < msg.length; i++) {

        charCodes.push(msg[i].charCodeAt(0))
    }

    console.log(secretMessage.charCodeAt(0))

    for (let i = 0; i < charCodes.length; i++) {
        charCodes[i] = charCodes[i] + shift

    }

    console.log(charCodes)

    let result = ""
    for (let i = 0; i < charCodes.length; i++) {
        result = result + String.fromCharCode(charCodes[i])
    }
    return result
}

export function ceasarDecrypt(encryptedMsg, shift) {
    const charCodes = []
    for (let i = 0; i < encryptedMsg.length; i++) {
        charCodes.push(msg[i].charCodeAt(0))

    }

    console.log(charCodes)

    for (let i = 0; i < charCodes.length; i++) {
        charCodes[i] = charCodes[i] - shift

    }

    console.log(charCodes)

    let result = ""
    for (let i = 0; i < charCodes.length; i++) {
        result = result + String.fromCharCode(charCodes[i])

    }
    return result
}

 const secretMessage = "Attack at eight"
 const encryptedMessage = ceasarEncrypt(secretMessage)

 console.log(secretMessage, encryptedMessage)

