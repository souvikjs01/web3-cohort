const crypto = require('crypto');

function proofOfWork(prefix){
    let input = 0;
    while(true){
        inputStr = input.toString();
        const hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if(hash.startsWith(prefix)){
            return { input: inputStr, hash: hash };
        }
        input++;
    }
}
const ans = proofOfWork('00000');
console.log(`input string: ${ans.input}`);
console.log(`output hash string: ${ans.hash}`);