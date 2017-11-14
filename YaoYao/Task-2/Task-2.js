var userName = document.getElementById("userName");
var passWord = document.getElementById("passWord");
var rePassWord = document.getElementById("rePassWord");
var email = document.getElementById("email");
var phoneNum = document.getElementById("phoneNum");
var submitBtn = document.getElementById("submitBtn");

var userNameHint = document.getElementById("userNameHint");
var passWordHint = document.getElementById("passWordHint");
var rePassWordHint = document.getElementById("rePassWordHint");
var emailHint = document.getElementById("emailHint");
var phoneNumHint = document.getElementById("phoneNumHint");

init();

function init() {
	userName.addEventListener("focus", userNameFocus);
	userName.addEventListener("blur", userNameBlur);
	passWord.addEventListener("focus", passWordFocus);
	passWord.addEventListener("blur", passWordBlur);
	rePassWord.addEventListener("focus", rePassWordFocus);
	rePassWord.addEventListener("blur", rePassWordBlur);
	email.addEventListener("focus", emailFocus);
	email.addEventListener("blur", emailBlur);
	phoneNum.addEventListener("focus", phoneNumFocus);
	phoneNum.addEventListener("blur", phoneNumBlur);
	submitBtn.addEventListener("click", checkAll);
}

function userNameFocus() {
	userNameHint.innerText = "必填，长度为4~16个字符";
	userNameHint.style.color = "#ccc";
}
function userNameBlur() {
	var userNameLen = getLength(userName.value);
	if (userNameLen == 0) {
		userNameHint.innerText = "名称不能为空";
		userNameHint.style.color = "red";
		userName.style.border = "1px solid red";
		return false;
	}
	else if (userNameLen >= 4 && userNameLen <= 16) {
		userNameHint.innerText = "名称格式正确";
		userNameHint.style.color = "green";
		userName.style.border = "1px solid green";
		return true;
	}
	else {
		userNameHint.innerText = "长度必须大于4且小于16";
		userNameHint.style.color = "red";
		userName.style.border = "1px solid red";
		return false;
	}
}
function getLength(value) {
	var length = 0;
	for (let i = 0, len = value.length; i < len; i++) {
		if (value[i].charCodeAt() > 255 || value[i].charCodeAt() < 0) {
			length += 2;
		}
		else {
			length++;
		}
	}
	return length;
}

function passWordFocus() {
	passWordHint.innerText = "请输入密码";
	passWordHint.style.color = "#ccc";
}
function passWordBlur() {
	if (passWord.value.length == 0) {
		passWordHint.innerText = "密码不能为空";
		passWordHint.style.color = "red";
		passWord.style.border = "1px solid red";
		return false;
	}
	else {
		passWordHint.innerText = "密码可用";
		passWordHint.style.color = "green";
		passWord.style.border = "1px solid green";
		return true;
	}
}

function rePassWordFocus() {
	rePassWordHint.innerText = "再次输入相同密码";
	rePassWordHint.style.color = "#ccc";
}
function rePassWordBlur() {
	if(rePassWord.value == passWord.value){
		rePassWordHint.innerText = "密码输入一致";
		rePassWordHint.style.color = "green";
		rePassWord.style.border = "1px solid green";
		return true;
	}
	else {
		rePassWordHint.innerText = "两次输入不一致，请重新输入密码";
		rePassWordHint.style.color = "red";
		rePassWord.style.border = "1px solid red";
		return false;
	}
}

function emailFocus() {
	emailHint.innerText = "请输入邮箱";
	emailHint.style.color = "#ccc";
}
function emailBlur() {
	var emailReg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
	if (emailReg.test(email.value)) {
		emailHint.innerText = "邮箱格式正确";
		emailHint.style.color = "green";
		email.style.border = "1px solid green";
		return true;
	}
	else {
		emailHint.innerText = "邮箱格式错误";
		emailHint.style.color = "red";
		email.style.border = "1px solid red";
		return false;
	}
}

function phoneNumFocus() {
	phoneNumHint.innerText = "请输入手机号码";
	phoneNumHint.style.color = "#ccc";
}
function phoneNumBlur() {
	var phoneNumReg = /^1(3|4|5|7|8)\d{9}$/;
	if (phoneNumReg.test(phoneNum.value)) {
		phoneNumHint.innerText = "手机格式正确";
		phoneNumHint.style.color = "green";
		phoneNum.style.border = "1px solid green";
		return true;
	}
	else {
		phoneNumHint.innerText = "手机格式错误";
		phoneNumHint.style.color = "red";
		phoneNum.style.border = "1px solid red";
		return false;
	}
}

function checkAll() {
	if (userNameBlur() && passWordBlur() && rePassWordBlur() && emailBlur() && phoneNumBlur()) {
		alert("提交成功");
	}
	else {
		alert("提交失败");
	}
}
