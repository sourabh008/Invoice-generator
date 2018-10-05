function submit() {
    var hide = document.getElementById("container");
    hide.style.display = "none";
    var invoiceno = document.getElementById("invoiceno").value;
    var from = document.getElementById("from").value;
    var tobill = document.getElementById("tobill").value;
    var date1 = document.getElementById("date1").value;
    var payment = document.getElementById("payment").value;
    var date2 = document.getElementById("date2").value;
    var balence = document.getElementById("payment").value;
    var tax = document.getElementById("tex").value;
    var due = document.getElementById("balance").value;
    var description = document.getElementById("description").value;
    var new1 = document.getElementById("new");
    new1.style.display = "block"
    new1.innerHTML = `<div id="container1">
<p id="top1"> Invoice</p>
<div class="left1">
   
    <p><b>From</b>:${from}</p>
    <p><b> To Bill</b>:${tobill}</p>
</div>
<div id="right1">
<p><b>Invoice No.</b>:${invoiceno} </p>
<p><b>Date:${date1}</b></p>
<p> <b>Due Date:${date2}</b></p>
</div>
<div class="table">
<table>
<th>Description
</th>
<th>Payment</th>
<th>Tax</th>
<th>Balence Due</th>
<tr>
<td>${description}</td>
<td>${payment}</td>
<td>${tax}</td>
<td>${due}</td>

</tr>

</table>
</div><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

</div>

<a href="javascript:download()" id="button1">download</a>
`}
