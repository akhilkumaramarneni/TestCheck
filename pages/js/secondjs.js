

function Anna() {
    //userId1 = document.getElementById("user").value;
    //passwd1 =document.getElementById("pass").value;

   // console.log(userId1, passwd1);
    //console.log("seconds js")
    //alert(document.cookie.split(";"));

    var allcokies = document.cookie.split(";");

    for(var i=0;i<allcokies.length;i++){
        alert(allcokies[i]);
    }

   document.getElementById("print").innerHTML = "welcome" + userId1;

    //how to get them@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

    // var userId1 = document.getElementById("user").value;
    // var passwd1 = document.getElementById("pass").value;


    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

    // var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
    // xmlhttp.open("POST", "http://localhost:7890/frontend",true);
    // xmlhttp.setRequestHeader("Content-Type", "application/json");
    // xmlhttp.send(JSON.stringify({user:userId1, password:passwd1}));
    //
    // xmlhttp.onreadystatechange = function(){
    //     if(this.readyState == 4 && this.status == 200){
    //
    //         console.log(xmlhttp.responseText);
    //         var returnText = xmlhttp.responseText;
    //         if(returnText=="success"){
    //             document.location.replace("tws.html");
    //             console.log("login success");
    //         }
    //         else{
    //             //window.alert(returnText)
    //             var convert = JSON.parse(returnText);
    //             document.getElementById("print").innerHTML = "welcome"+convert.user;
    //             //window.alert("Incorrect credentials"+convert.user+"   "+returnText.password);
    //             //document.location.replace("welcome.html");
    //             //console.log("login failure");
    //         }
    //
    //
    //     }
    // }

    //##########################################3

}


//window.onload=Load()