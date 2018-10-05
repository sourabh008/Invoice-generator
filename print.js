function download(){
    var doc= new jsPDF();
    doc.fromHTML($("#container1").get(0),30,30,{
        'width':500
    });
    doc.save("text.pdf");
}
function hide()
{
    let btn=document.getElementById("button1");
    btn.style.display="none";
}