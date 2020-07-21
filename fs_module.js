/*
Node.js 내장 모듈 중 FileSystem 모듈을 학습
*/
var fs = require("fs");

//java의 FileInputStream과 동일한 기능 구현
try{
	fs.readFile("memo.txt","utf8",function(error,data){
		console.log(data);
		//읽어들인 데이터를 파일에 출력
		fs.writeFile("copy.text",data,"utf8",function(error){
			console.log("output finished!!");
		});
	});
}catch(e){
	console.log("에러 정보 : ",e);
}