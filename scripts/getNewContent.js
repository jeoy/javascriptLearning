function getNewContent(){
	var request = getHttpObject();
	if(request){
		request.open("GET","example.txt",true);
		request.onreadystatechange = function(){
			if (request.readyState == 4){
				var para = document.createElement("p");
				var txt = document.createTextNode(request.responseText);
				para.appendChild(txt);
				document.getElementById("new").appendChild(para);
			}
		}
		request.send(null);
	}
	else{
		alert("Sorry, But your poor Web browser don't support Ajax")
	}

} 

function postSomething(data,url){
  var request = getHttpObject();
  if (request){
    request.open("post",url);
    request.onreadystatechange = function(){
    	if(request.readyState == 4 && request.status == 200){
    		 // var obj = eval('('+request.responseText+')');
    		alert(request.responseText);
    	}
    }

	request.setRequestHeader("Content-type","application/x-www-form-urlencoded");  
	request.send("name=dsad&nwda=wda&dwd=dwad"); 
  }
}
