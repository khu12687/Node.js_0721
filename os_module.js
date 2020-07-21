/*
Node.js가 지원하는 내장 모듈 중 OS 모듈을 학습
모듈이란? 함수집합을 의미(함수를 특정 파일에 모아놓은 단위)
*/

//모듈 로드하기
var os = require("os");
console.log(os.hostname()); //컴퓨터 이름 반환
console.log(os.type()); //os의 이름
console.log(os.release()); //os의 버전
console.log(os.totalmem()); //램
console.log(os.cpus()); //cpu 스펙