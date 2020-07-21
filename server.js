/*
웹 서버 구축하기!
톰캣은 이미 구축완료돈 솔루션이라서, 이용만 하면되었지만
Node.js의 서버는 http모듈을 이용하여 개발자가 세세히 제어 할 수 있다.
*/

var http=require("http"); //내장된 모듈
var fs=require("fs");
var url=require("url"); //url 전문분석 모듈!!

var server=http.createServer(function(request, response){
   //클라이언트의 요청을 분석하여 알맞는 컨텐츠를 보여줘야 한다..
   console.log("요청 url : ",request.url);

   //url에는 파라미터가 포함되어서 판단되어지면 안됨에도 불구하고
   //request.url 속성을 그대로사용한다면, 파라미터조차 url에
   //포함도어져 판단된다!!
   //해결책) url전문적으로 해석(parsing)할 수 있는 모듈이 요구됨
	var result = url.parse(request.url);
	console.log("param", result.query);
	console.log("url", result.pathname);

   if (result.pathname=="/a9.png"){
      //클라이언트에 이미지 응답정보 보내기
      response.writeHead(200, {"content-type":"image/jpeg"});
      fs.readFile("./images/a9.png", function(error, data){
         response.end(data); //body에 적재될 내용
      });
   }
   else if (result.pathname=="/test.html"){
      response.writeHead(200, {"content-type":"text/html;charset=utf-8"}); //header 정보 구성
      fs.readFile("test.html", "utf-8", function(error, data){
         response.end(data); //body에 적재될 내용
      });
   }
   else {
      response.writeHead(404, {"content-type":"text/html;charset=utf-8"}); //header 정보 구성
      response.end();
   }
}); //서버객체 얻기!

//요청을 받는 처리~~
/*
server.on("request", function(){
   console.log("요청 발견!");
});
*/
server.listen(7979, function(){
   console.log("the server is running at 7979 port...");
});