
var characterSelected="";

TanteDide = ["La fortune de Rougon","La conquête de Plassans", "Le Docteur Pascal"];
PierreRougon = ["La fortune de Rougon","La conquête de Plassans"];
PascalRougon = ["La curée", "La faute de l'abbé Mouret","Le Docteur Pascal"];
EugeneRougon = ["La conquête de Plassans","La curée","Son Excellence Monsier Rougon","L'Argent","Le Docteur Pascal" ];
AristideRougon = ["La fortune de Rougon","La curée","L'Argent","La joie de vivre"];
SidonieRougon = ["La fortune de Rougon","La curée","Son Excellence Monsier Rougon","L'Argent"];
MartheRougon = PierreRougon;
Angelique = ["Le Reve"];
MaximeRougon = ["La fortune de Rougon","La curée","l'Argent","Le Docteur Pascal"];
ClotildeRougon = ["Le Docteur Pascal"];
AntoineMacquart = ["La fortune de Rougon"];
UrsuleMacquart = AntoineMacquart;
HeleneMouret = ["La fortune de Rougon","Une page d'amour"];
FrancoisMouret = PierreRougon;
SilvereMouret = AntoineMacquart;
OctaveMouret = ["La conquête de Plassans","Pot-Bouille","Au Bonheur des Dames", "La joie de vivre"];
SergeMouret = ["La conquête de Plassans","La faute de l'abbé Mouret"];
DesireeMouret = SergeMouret;
JeanMacquart = ["La debacle", "La Terre"];
GervaiseMacquart = ["La fortune de Rougon","Le ventre de Paris","L'Assomoir"];
LisaMacquart = ["La fortune de Rougon","Le ventre de Paris","La joie de vivre"];
PaulineQuenu = LisaMacquart;
EtienneLantier = ["L'assomoir","Germinal"];
ClaudeLantier = ["L'assomoir","Le ventre de Paris","L'Oevre"];
JacquesLantier = ["La bête humaine"];
Nana = ["L'assomoir","Nana"];




//get the value from the radio button then call the displayanswer function
var radioAnswer = document.querySelectorAll("input");





function setCharacter() {
    for (i=0;i<radioAnswer.length;i++) {
        if (radioAnswer[i].checked) {
            document.getElementById('finder').classList.add('accordionHide');
            document.getElementById('resultParagraph').classList.remove('accordionHide');
            characterSelected=radioAnswer[i].value;
            displayAnswer(characterSelected);  
        }
    }
}
    


function resetCharacter(){
    document.getElementById('finder').classList.remove('accordionHide');
    document.getElementById('resultParagraph').classList.add('accordionHide');  
    for (i=0;i<radioAnswer.length;i++){
        if (radioAnswer[i].checked){
             radioAnswer[i].checked = false;
        }
    }
}

//use switch to match the character to the right case and write the correct array

/*
function displayAnswer(character){
    switch (character) {
        case 'Tante Dide':
            alert(character+' appears in: '+TanteDide);;
            break;
        case 'Pierre Rougon':
            alert(character+' appears in: '+PierreRougon);
            break;
        case 'Pascal Rougon':
            alert(character+' appears in: '+PascalRougon);
            break;
        case 'Eugéne Rougon':
            alert(character+' appears in: '+EugeneRougon);
            break;
        case 'Aristide Rougon':
            alert(character+' appears in: '+AristideRougon);
            break;
        case 'Sidonie Rougon':
            alert(character+' appears in: '+SidonieRougon);
            break;
        case 'Marthe Rougon':
            alert(character+' appears in: '+MartheRougon);
            break;
        case 'Maxime Rougon':
            alert(character+' appears in: '+MaximeRougon);
            break;
        case 'Clotilde Rougon':
            alert(character+' appears in: '+ClotildeRougon);
            break;
        case 'Angélique':
            alert(character+' appears in: '+Angelique);
            break;
        case 'Antoine Macquart':
            alert(character+' appears in: '+AntoineMacquart);
            break;
        case 'Ursule Macquart':
            alert(character+' appears in: '+UrsuleMacquart);
            break;
        case 'Hélène Mouret':
            alert(character+' appears in: '+HeleneMouret);
            break;   
        case 'François Mouret':
            alert(character+' appears in: '+FrancoisMouret);
            break;
        case 'Silvère Mouret':
            alert(character+' appears in: '+SilvereMouret);
            break; 
        case 'Octave Mouret':
            alert(character+' appears in: '+OctaveMouret);
            break; 
        case 'Serge Mouret':
            alert(character+' appears in: '+SergeMouret);
            break; 
        case 'Desirée Mouret':
            alert(character+' appears in: '+DesireeMouret);
            break; 
        case 'Lisa Macquart':
            alert(character+' appears in: '+LisaMacquart);
            break;
        case 'Pauline Quenu':
            alert(character+' appears in: '+PaulineQuenu);
            break;
        case 'Gervaise Macquart':
            alert(character+' appears in: '+GervaiseMacquart);
            break;
        case 'Jean Macquart':
            alert(character+' appears in: '+JeanMacquart);
            break;
        case 'Etienne Lantier':
            alert(character+' appears in: '+EtienneLantier);
            break;
        case 'Claude Lantier':
            alert(character+' appears in: '+ClaudeLantier);
            break;
        case 'Jacques Lantier':
                alert(character+' appears in: '+JacquesLantier);
                break;
        case 'Nana':
            alert(character+' appears in: '+Nana);
            break;
        default:
            alert('pick someone else');
    };
};

*/

// write underneath the form

function displayAnswer(character){
    switch (character) {
        case 'Tante Dide':
            document.getElementById('result').textContent = (character+' appears in: '+TanteDide);
            break;
        case 'Pierre Rougon':
            document.getElementById('result').textContent = (character+' appears in: '+PierreRougon);
            break;
        case 'Pascal Rougon':
            document.getElementById('result').textContent = (character+' appears in: '+PascalRougon);
            break;
        case 'Eugène Rougon':
            document.getElementById('result').textContent = (character+' appears in: '+EugeneRougon);
            break;
        case 'Aristide Rougon':
            document.getElementById('result').textContent = (character+' appears in: '+AristideRougon);
            break;
        case 'Sidonie Rougon':
            document.getElementById('result').textContent = (character+' appears in: '+SidonieRougon);
            break;
        case 'Marthe Rougon':
            document.getElementById('result').textContent = (character+' appears in: '+MartheRougon);
            break;
        case 'Maxime Rougon':
            document.getElementById('result').textContent = (character+' appears in: '+MaximeRougon);
            break;
        case 'Clotilde Rougon':
            document.getElementById('result').textContent = (character+' appears in: '+ClotildeRougon);
            break;
        case 'Angélique':
            document.getElementById('result').textContent = (character+' appears in: '+Angelique);
            break;
        case 'Antoine Macquart':
            document.getElementById('result').textContent = (character+' appears in: '+AntoineMacquart);
            break;
        case 'Ursule Macquart':
            document.getElementById('result').textContent = (character+' appears in: '+UrsuleMacquart);
            break;
        case 'Hélène Mouret':
            document.getElementById('result').textContent = (character+' appears in: '+HeleneMouret);
            break;   
        case 'François Mouret':
            document.getElementById('result').textContent = (character+' appears in: '+FrancoisMouret);
            break;
        case 'Silvère Mouret':
            document.getElementById('result').textContent = (character+' appears in: '+SilvereMouret);
            break; 
        case 'Octave Mouret':
            document.getElementById('result').textContent = (character+' appears in: '+OctaveMouret);
            break; 
        case 'Serge Mouret':
            document.getElementById('result').textContent = (character+' appears in: '+SergeMouret);
            break; 
        case 'Desirée Mouret':
            document.getElementById('result').textContent = (character+' appears in: '+DesireeMouret);
            break; 
        case 'Lisa Macquart':
            document.getElementById('result').textContent = (character+' appears in: '+LisaMacquart);
            break;
        case 'Pauline Quenu':
            document.getElementById('result').textContent = (character+' appears in: '+PaulineQuenu);
            break;
        case 'Gervaise Macquart':
            document.getElementById('result').textContent = (character+' appears in: '+GervaiseMacquart);
            break;
        case 'Jean Macquart':
            document.getElementById('result').textContent = (character+' appears in: '+JeanMacquart);
            break;
        case 'Etienne Lantier':
            document.getElementById('result').textContent = (character+' appears in: '+EtienneLantier);
            break;
        case 'Claude Lantier':
            document.getElementById('result').textContent = (character+' appears in: '+ClaudeLantier);
            break;
        case 'Nana':
            document.getElementById('result').textContent = (character+' appears in: '+Nana);
            break;
        case 'Jacques Lantier':
            document.getElementById('result').textContent = (character+' appears in: '+JacquesLantier);
            break;
        default:
            document.getElementById('result').textContent = ('Pick someone else');
    };
};


//test with an if statement for the answer

/*
function displayAnswer (character){
    if (character==='Tante Dide' || character==='Silvere'){
    document.writeln (character+' is found in those books: '+TanteDide) }
 else {
    document.writeln ('pick another character');
}
 } ;
*/

/* can i do this?
/*
function displayAnswer(character){
    document.writeln('Character '+character+'appears in: '+(books+character));
}

*/
