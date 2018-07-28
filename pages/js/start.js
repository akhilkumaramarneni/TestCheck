//alert("came into js page");

// function Start(){
//     var loginbtn = document.getElementById("btn");
//     loginbtn.addEventListener('click',this.login.bind(this));
// };

//Start.prototype.login =
//var userId1="fuck";
//var passwd1="sale";
//alert(userId1+"  "+passwd1)
function onClick(){

   // console.log("hello");

    var userId1 = document.getElementById("user").value;
    var passwd1 = document.getElementById("pass").value;
    //document.cookie = "userId1 ="+userId1;

    //alert(decodeURIComponent(document.cookie));
    console.log(userId1,passwd1);

    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
    xmlhttp.open("POST", "http://localhost:7890/frontend",true);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(JSON.stringify({user:userId1, password:passwd1}));

    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){

            console.log(xmlhttp.responseText);
            var returnText = xmlhttp.responseText;
            if(returnText=="success"){
                document.location.replace("tws.html");
                console.log("login success");
            }
            else{
                window.alert(returnText)
                var convert = JSON.parse(returnText);
                window.alert("Incorrect credentials"+convert.user+"   "+returnText.password);

                window.open("welcome.html")
                //document.location.replace("welcome.html");

                //console.log("login failure");
            }


        }
    }


};

// window.onload = function(){
//     window.Start = new Start();
// };