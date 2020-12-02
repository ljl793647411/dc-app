/**
 * @description 把一维数组分割为二维数组
 * @param {data}   原数组数据
 * @param {step}   原数组长度单元
 * @param {outerArrLen}  外层数组长度
 * @param {dataLen} 原数据长度  
 */
const splitArr = (data,senArrLen)=> {
	//处理成len个一组的数据
	let data_len = data.length;
	let arrOuter_len = data_len % senArrLen === 0 ? data_len / senArrLen : parseInt((data_len / senArrLen)+'') + 1;
	let arrSec_len = data_len > senArrLen ? senArrLen : data_len;//内层数组的长度
	let arrOuter = new Array(arrOuter_len);//最外层数组
	let arrOuter_index = 0;//外层数组的子元素下标
	// console.log(data_len % len);
	for (let i = 0; i < data_len; i++) {
	    if (i % senArrLen === 0){
	        arrOuter_index++;
	        let len = arrSec_len * arrOuter_index;
	        //将内层数组的长度最小取决于数据长度对len取余，平时最内层由下面赋值决定
	        arrOuter[arrOuter_index-1] = new  Array(data_len % senArrLen);
	        if(arrOuter_index === arrOuter_len)//最后一组
	            data_len % senArrLen === 0 ?
	                len = data_len % senArrLen + senArrLen * arrOuter_index :
	                len = data_len % senArrLen + senArrLen * (arrOuter_index - 1);
	        let arrSec_index = 0;//第二层数组的索引
	        for (let k = i; k < len; k++) {//第一层数组的开始取决于第二层数组长度*当前第一层的索引
	            arrOuter[arrOuter_index-1][arrSec_index] = data[k];
	            arrSec_index++;
	        }
	    }
	}
	// console.log(arrOuter)
	return arrOuter
}
export {
	splitArr
}