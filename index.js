const endDate ="31 December 2023 10:00 PM";

document.getElementById("end-date").innerText=endDate;

const inputs=document.querySelectorAll("input");   
function clock() {
    const end =new Date(endDate);
    const now=new Date();
    const diff=(end-now)/1000;
   
    if(diff <0) return;
      
    // convert to days   
    inputs[0].value = Math.floor(diff / 3600/ 24);

    // convert to Hours   

    inputs[1].value =  Math.floor(diff /3600) % 24 ;
   
    // convert to Minutes   

    inputs[2].value =  Math.floor(diff /60) % 60;

    // convert to Seconds   

    inputs[3].value =  Math.floor(diff ) % 60;
}
clock();

setInterval(
    ()=>
    {
        clock();
    },
    1000
);