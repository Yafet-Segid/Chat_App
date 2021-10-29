
// const input = document.getElementsByClassName('input');
const send = document.getElementsByClassName('sendBtn')



send.addEventListener("clcik", function(e){
    e.preventDefault();
    fillArray();
   
} )

function fillArray(){
    console.log("test");
    const input = document.getElementsByClassName('input').value;
    document.getElementsByClassName('display').innerHTML = input;
    

}