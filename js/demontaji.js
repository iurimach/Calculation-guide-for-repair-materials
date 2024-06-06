function toggleContent(header) {
    const content = header.nextElementSibling;
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        header.innerHTML = "-<p>" + header.querySelector('p').innerText + "</p>";
    } else {
        content.style.display = "none";
        header.innerHTML = "+<p>" + header.querySelector('p').innerText + "</p>";
    }
}


function demontaji(){
    const select1Value = parseFloat(document.getElementById('select_demontaji').value);
    var inputvalue =document.getElementById("input_demontaji").value;
    result= select1Value * inputvalue
    console.log(result)
    return result
} 

//გამოთვლის ღილაკამდე ტელფონი შეიყვნე ფუნქცია, აქ აქვე ვიძახებ გამოთვლას
document.getElementById('summButton').addEventListener('click', function() {
    // Prompt the customer to enter their phone number
    
    let isValid = false;
    let userInput; // აქ ინახვს შეყვანილ ტელფონის ნომერს
    while (!isValid) {
        userInput = prompt("შეიყვანე ტელეფონის ნომერი:");

        // Check if the input is exactly 9 digits and contains only numbers
        if (/^\d{9}$/.test(userInput)) {
            isValid = true;
        } else {
            alert("არასწორი ნომერია. ნომერი უნდა იყოს 9 ციფრიანი");
        }
    }
    if(isValid=true){
        allsumm(userInput);
        console.log(userInput,"shida ")
    }
    
    
});



function allsumm(userInput){ // აქ ვითვლი ჯამურ ფასებს.  userInput = შეყვნილ ტელ ნომერს ინახვს აქ
    var demontajisumm=demontaji() // ფუნქციას ვარეთარნებინებ ფასს და ვინხვ ცვლდში და შემდეგ ვკრიბავ
    
    const results = `
    დემონტაჟის ფასი :  ${demontajisumm }, 
    
    
    სულ გადასახდელი: ${demontajisumm} 
`;
document.getElementById('results').innerText = results;
SendMail(userInput, results ) // აქ ვიძახებ სენდ ფუნქციას ვაყოლებ პარმეტრბს  ქვევით ავღწერე

}



//ეს აგზვნის მეილზე- userInput= შეყვნილ ნომერს და results = ფასებს რაც გამოთვალა
function SendMail(userInput, results){ // პარმეტრებს ვაწოდებ summ ფუნქციიდან


var params={
        
    message:userInput + " დემონტაჟის გვერდზე ფასი გამოთვალა " + results // results= გამოთვლილ პროცედურას რას ითვლიდა
}
// აქ ემილის პარმეტრბი წერია , email.js მა რაც მომანიჭა იდ 
emailjs.send("service-matchara_18", "template_0843m4r",params).then(function(res){
    
console.log("gaigzavna mesiji", userInput)
})
    

}