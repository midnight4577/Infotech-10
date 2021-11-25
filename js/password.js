// JavaScript Document
var nums = [];
const correctNums = [1, 2, 3, 4];//this would need to be encrypted

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.
  // Please note that calling sort on an array will modify that array.
  // you might want to clone your array first.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function addNum(num){
	nums.push(num);
	return nums;
}
function clearNums(){
	nums.length = 0;
	return nums;
}
function checkNums(){
	//would have to encrypt "nums" then check whether the 2 encrypted variables are equal
	//this would still be easy to brute force
	if (arraysEqual(nums, correctNums)){
		nums.length = 0;
		return "Correct";
	}
	else{
		nums.length = 0;
		return "Incorrect";
	}
}

