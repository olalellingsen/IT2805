
//Funksjonen endrer CSS-formateringen til elementet, når musa entrer
function onEnterHeader(nodeID){
    let header = document.getElementById(nodeID);
    let number = header.id.substr(-1);
    let paragraph = document.getElementById("par" + number);

    if(paragraph.style.height == ""){
        header.style.color = "#bf1e2e";
        let expandBtn = header.childNodes.item(3);
        expandBtn.style.opacity = "50%";
    }
}

//Funksjonen endrer CSS-formateringen til default når musa forsvinner fra elementet
function onLeaveHeader(nodeID){
    let header = document.getElementById(nodeID);
    header.style.color = ""
    let expandBtn = header.childNodes.item(3);
    expandBtn.style.opacity = "";
}

//Funksjonen endrer CSS-formateringen til elementet, når musa entrer
function onEnterContractBtn(nodeID){
    let contractBtn = document.getElementById(nodeID);
    contractBtn.style.opacity = "50%";
}

//Funksjonen endrer CSS-formateringen til default når musa forsvinner fra elementet
function onLeaveContractBtn(nodeID){
    let contractBtn = document.getElementById(nodeID);
    contractBtn.style.opacity = "";
}

//Disse er tellere for hvert av prosjetene. Om flere prosjekter legges inn, må denne utvides og legge på en ny else-if
//i expand- og contractfunksjonene
let p1 = 0;
let p2 = 0;
let p3 = 0;
let p4 = 0;
let p5 = 0;
let p6 = 0;

//Funksjonen minimerer valgte prosjektet s.a kun bilde og header vises etter kjøring. 
function ContractProject(contractID){

    //Henter ut de aktuelle nodene
    let contractBtn = document.getElementById(contractID);
    let paragraph = contractBtn.parentNode;
    let number = paragraph.id.substr(-1);
    let expandBtn = document.getElementById("expand" + number)

    //Setter et intervall som skal kjøre funksjonen contract hvert 5. millisekund
    let timer = setInterval(contract, 5);

    
    function contract(){

        if(number == 1){

            if(paragraph.style.height != '0px'){
                p1-= 5;
                y = p1.toString();
                paragraph.style.height = y + "px";
                paragraph.style.paddingTop = ""
                expandBtn.style.height = ""
            }else{
                clearInterval(timer);
            }

        }else if(number == 2){

            if(paragraph.style.height != '0px'){
                p2-= 5;
                y = p2.toString();
                paragraph.style.height = y + "px";
                paragraph.style.paddingTop = ""
                expandBtn.style.height = ""
            }else{
                clearInterval(timer);
            }
        }else if(number == 3){

            if(paragraph.style.height != '0px'){
                p3-= 5;
                y = p3.toString();
                paragraph.style.height = y + "px";
                paragraph.style.paddingTop = ""
                expandBtn.style.height = ""
            }else{
                clearInterval(timer);
            }
        }else if(number == 4){

            if(paragraph.style.height != '0px'){
                p4-= 5;
                y = p4.toString();
                paragraph.style.height = y + "px";
                paragraph.style.paddingTop = ""
                expandBtn.style.height = ""
            }else{
                clearInterval(timer);
            }
        }

    }
}

//Funksjonen utvider valgte prosjektet s.a også brødteksten vises etter kjøring. 
function expandProject(nodeID){


    //Henter ut de aktuelle nodene
    let project = document.getElementById(nodeID);
    let projectID = project.id;
    let number = projectID.substr(-1);
    let paragraph = document.getElementById("par" + number)
    let expandBtn = document.getElementById("expand" + number)

    let timer = setInterval(expand, 5);

    function expand(){

        if(number == 1){

            if(paragraph.style.height != '380px') {
                p1+= 5;
                y = p1.toString();
                paragraph.style.height = y + "px";
                paragraph.style.paddingTop = "10px"
                expandBtn.style.height = "0px"

            }else{
                clearInterval(timer);
            }

        }else if(number == 2){

            if(paragraph.style.height != '380px') {
                p2+= 5;
                y = p2.toString();
                paragraph.style.height = y + "px";
                paragraph.style.paddingTop = "10px"
                expandBtn.style.height = "0px"

            }else{
                clearInterval(timer);
            }
        }else if(number == 3){

            if(paragraph.style.height != '380px') {
                p3+= 5;
                y = p3.toString();
                paragraph.style.height = y + "px";
                paragraph.style.paddingTop = "10px"
                expandBtn.style.height = "0px"

            }else{
                clearInterval(timer);
            }
        }
        else if(number == 4){

            if(paragraph.style.height != '380px') {
                p4+= 5;
                y = p4.toString();
                paragraph.style.height = y + "px";
                paragraph.style.paddingTop = "10px"
                expandBtn.style.height = "0px"

            }else{
                clearInterval(timer);
            }
        }
    }
}





