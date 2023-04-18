var counter = 0
var time= null;
var objectslide;
var pauseid = false;

function load_slides(){
    var xmlhttp, text;
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', 'slides.json')
    xmlhttp.onload = function(){
        text = this.responseText;
        objectslide = JSON.parse(text);
    }
    xmlhttp.send();
    
}

load_slides();

function playslide(){
    div = document.getElementById("SLSH");
    while (div.childElementCount !=0){
            div.removeChild(div.firstChild);
    }
    var frame = document.createElement("iframe");
    frame.src = objectslide.slides[counter].url;
    div.appendChild(frame);
    counter+=1
    if(counter<6){
        if (pauseid==false){
                setTimeout(playslide, 2000);
        }
    }
}

function pause(){
    if(pauseid){
        pauseid=false;
        playslide()
    }
    else{
        pauseid=true;
        counter-=1
    }
}

function next(){
    
    pauseid=true;
    if (counter>5){return;}
    else {
        
        div = document.getElementById("SLSH");
        while (div.childElementCount !=0){
                div.removeChild(div.firstChild);
        }
        var frame = document.createElement("iframe");
        frame.src = objectslide.slides[counter].url;
        div.appendChild(frame);
        counter++;
        

    }
}
function previous(){
    pauseid=true;
    if(counter<2){return;}
    else{
        counter-=1
        div = document.getElementById("SLSH");
        while (div.childElementCount !=0){
                div.removeChild(div.firstChild);
        }
        var frame = document.createElement("iframe");
        frame.src = objectslide.slides[counter-1].url;
        div.appendChild(frame);
    }


}