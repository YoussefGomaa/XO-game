var data = 'x';
var player=document.getElementById('play');
player.innerHTML='X is the player';
function select(id){
    var x =document.getElementById(id);
    if(data==='x' && x.innerHTML==''){
        data='o';
        x.innerHTML='x';
        player.innerHTML='O is the player';
    }
    else if(data==='o'&&x.innerHTML==''){
        data='x';
        x.innerHTML='o';
        player.innerHTML='X is the player' ;
    }
    pass();

}
function pass(){
    var boxes=[];
    for(var i=1;i<=9;i++){
        boxes[i]=document.getElementById('div'+i).innerHTML;
    }
    if(boxes[1]==boxes[2]&&boxes[3]==boxes[2]&&boxes[1]!=''){
        player.innerHTML=boxes[1]+" is winner";
        setTimeout(function(){location.reload()},2000);
    }
    else if(boxes[4]==boxes[5]&&boxes[5]==boxes[6]&&boxes[4]!=''){
        player.innerHTML=boxes[4]+" is winner"; 
        setTimeout(function(){location.reload()},2000);
    }
    else if(boxes[7]==boxes[8]&&boxes[8]==boxes[9]&&boxes[7]!=''){
        player.innerHTML=boxes[7]+" is winner";      
        setTimeout(function(){location.reload()},2000);
    }
    else if(boxes[1]==boxes[5]&&boxes[5]==boxes[9]&&boxes[1]!=''){
        player.innerHTML=boxes[1]+" is winner";  
        setTimeout(function(){location.reload()},2000);    
    }
    else if(boxes[3]==boxes[5]&&boxes[5]==boxes[7]&&boxes[3]!=''){
        player.innerHTML=boxes[3]+" is winner"; 
        setTimeout(function(){location.reload()},2000);     
    }
    else if(boxes[1]==boxes[4]&&boxes[4]==boxes[7]&&boxes[7]!=''){
        player.innerHTML=boxes[1]+" is winner";   
        setTimeout(function(){location.reload()},2000);   
    }
    else if(boxes[2]==boxes[5]&&boxes[5]==boxes[8]&&boxes[2]!=''){
        player.innerHTML=boxes[2]+" is winner"; 
        setTimeout(function(){location.reload()},2000);     
    }
    else if(boxes[3]==boxes[6]&&boxes[6]==boxes[9]&&boxes[3]!=''){
        player.innerHTML=boxes[3]+" is winner";  
        setTimeout(function(){location.reload()},2000);    
    }
    
    
}
