const bytes = [201, 90, 78, 255]
console.log(bytes);
const bytes2 = [209, 90, 78, 256, 257];
console.log(bytes2);

let arr1 = new Uint8Array(bytes2);
console.log(arr1);

let arr2 = new Uint8Array([209, 100, 50, 60, 38]);
console.log(arr2);
arr2[1] = 256
console.log(arr2);


// UInt8Array to ascii
function bytesToAscii(byteArray) {
    return new TextDecoder().decode(byteArray);
}
  
// Example usage:
const bytes3 = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
const asciiString = bytesToAscii(bytes3);
console.log(asciiString); // Output: "Hello"

// ascii to UInt8Arr
function asciiToUInt8Arr(str){
    return new Uint8Array([...str].map(char => char.charCodeAt(0)));
}
let name = "Hello"
console.log(asciiToUInt8Arr(name));
name = "Souvik"
console.log(asciiToUInt8Arr(name));
