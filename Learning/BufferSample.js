const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(buf);

console.log(json);

const copy = JSON.parse(json, (key, value)=>{
	return value && value.type === 'Buffer' ?
		Buffer.from(value.data) :
	value;
});

console.log(copy);

var buffer1 = Buffer.from(('EbWtRULEtWld'));
var buffer2 = Buffer.from(('www.baidu.com'));

var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log("Buffer3:" + buffer3.toString());

var buffer4 = Buffer.from(('EbWt'));

var result = buffer4.compare(buffer1);

if(result < 0){
	console.log(buffer4 + "在" + buffer1 + "之前");
}else if(result == 0){
	console.log(buffer4 + "在" + buffer1 + "之前");
}else{
	console.log(buffer4 + "在" + buffer1 + "之前");
}