//Creation of window.onload function
window.onload = function() {
    //Declaration of variables
    var head = document.getElementsByTagName("Header"); //1.
    var section = document.getElementsByTagName("section"); //2.
    var curSection = document.getElementsByClassName("current"); //3.
    //Number 4 and 5
    var selection = document.querySelector("section.current");
    var before = selection.previousElementSibling;
    var after = selection.nextElementSibling.children;
    //var divCol = document.getElementsByClassName("col");
    var h2Highlight = document.querySelector("h2.highlight").parentElement.parentElement;
    
    var sectionsContainingH2 = Array.from(document.querySelectorAll("h2")).map(x => x.parentElement);

    //Printing of variables
    console.log(head); //1.
    console.log(section); //2.
    console.log(curSection); //3.
    console.log(after); //4.
    console.log(before); //5.
    //console.log(divCol); //6.
    console.log(h2Highlight); //6.
    console.log(sectionsContainingH2); //7.
}