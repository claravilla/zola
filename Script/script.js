//LOCATIONS PAGE
//find paragraph and close them

var paragraphAccordian = [];
var paragraphAccordian = document.querySelectorAll('div.accordion');
console.log(paragraphAccordian.length);

function hideParagraph() {
    for (i=0;i<paragraphAccordian.length;i++){
        paragraphAccordian[i].setAttribute('class','accordionHide accordion');
    }
};

hideParagraph();

//var paragraphHeader = document.querySelectorAll('button');
//console.log(paragraphHeader.length);

//accordian

document.getElementById('paris').addEventListener('click',function(){
    document.getElementById('parisParagraph').classList.toggle('accordionHide');
})

document.getElementById('aix').addEventListener('click',function(){
    document.getElementById('aixParagraph').classList.toggle('accordionHide');
})

document.getElementById('medan').addEventListener('click',function(){
    document.getElementById('medanParagraph').classList.toggle('accordionHide');
})

document.getElementById('london').addEventListener('click',function(){
    document.getElementById('londonParagraph').classList.toggle('accordionHide');
})

document.getElementById('assomoir').addEventListener('click',function(){
    document.getElementById('assomoirParagraph').classList.toggle('accordionHide');
})

document.getElementById('bonheur').addEventListener('click',function(){
    document.getElementById('bonheurParagraph').classList.toggle('accordionHide');
})

document.getElementById('argent').addEventListener('click',function(){
    document.getElementById('argentParagraph').classList.toggle('accordionHide');
})




