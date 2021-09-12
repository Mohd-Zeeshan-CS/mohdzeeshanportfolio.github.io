var dark = document.getElementById("dark");

dark.onclick = function(){

    document.body.classList.toggle("dark-theme");
    
    if(document.body.classList.contains("dark-theme")){

        dark.src="./assets/lite.gif";

    }else{

        dark.src="./assets/dark.gif";

    }

}