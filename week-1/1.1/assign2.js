const crypto = require('crypto')

// 100xdevs + input === 00000 + any
function solve(prefix){
    const header = "100xdevs";
    let input = 0;
    while(true){
        const inputStr = header + input.toString();
        const hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if(hash.startsWith(prefix)){
            return { input: inputStr, hash: hash }
        }
        input++;
    }
}

const ans = solve("00000");
console.log(`input string: ${ans.input}`);
console.log(`output hash string: ${ans.hash}`);

