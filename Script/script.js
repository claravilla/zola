//LOCATIONS PAGE
//find paragraph and close them

var paragraphAccordian = [];
var paragraphAccordian = document.querySelectorAll('div.accordian');
console.log(paragraphAccordian.length);

function hideParagraph() {
    for (i=0;i<paragraphAccordian.length;i++){
        paragraphAccordian[i].setAttribute('class','accordianHide accordian');
    }
};

hideParagraph();

//var paragraphHeader = document.querySelectorAll('button');
//console.log(paragraphHeader.length);

//accordian

document.getElementById('paris').addEventListener('click',function(){
    document.getElementById('parisParagraph').classList.toggle('accordianHide');
})

document.getElementById('aix').addEventListener('click',function(){
    document.getElementById('aixParagraph').classList.toggle('accordianHide');
})

document.getElementById('medan').addEventListener('click',function(){
    document.getElementById('medanParagraph').classList.toggle('accordianHide');
})

document.getElementById('london').addEventListener('click',function(){
    document.getElementById('londonParagraph').classList.toggle('accordianHide');
})

document.getElementById('assomoir').addEventListener('click',function(){
    document.getElementById('assomoirParagraph').classList.toggle('accordianHide');
})

document.getElementById('bonheur').addEventListener('click',function(){
    document.getElementById('bonheurParagraph').classList.toggle('accordianHide');
})

document.getElementById('argent').addEventListener('click',function(){
    document.getElementById('argentParagraph').classList.toggle('accordianHide');
})




