let endDate= "14 October 2034 12:20 pm";
document.getElementById("end-date").innerText=endDate;

const inputs =document.querySelectorAll("input")

const clock = ()  => {
    const end = new Date(endDate);
    const now =new Date();
    diff=(end-now)/1000;
    console.log(diff);
    //cvnt to days
    inputs[0].value = Math.floor(diff/60/60/24);
    inputs[1].value = Math.floor(diff/60/60)%24;
    inputs[2].value = Math.floor(diff/60)%60;
    inputs[3].value = Math.floor(diff)%60;
}
clock();

setInterval(
    () => {
        clock();
    },
    1000
)