//page routing
function loadChildren(pageName, id)
{
    // debugger;
    $(".leftMenuHighlight").removeClass("leftMenuHighlight");
    $("#"+id+" li").addClass("leftMenuHighlight");
 localStorage.setItem("currentPage", pageName);
 localStorage.setItem("leftMenuItem", id);
 $("#ChildrenDiv").load(pageName);
}
// for reload envents
//clear localStorage
function clearAllLocalStorage()
{
    localStorage.removeItem('currentPage');
    localStorage.removeItem("leftMenuItem");
}
$(document).ready(function () {
    // debugger;
    if(localStorage.getItem("currentPage"))
    {
        $("#"+localStorage.getItem("leftMenuItem")+" li").addClass("leftMenuHighlight");
        $("#ChildrenDiv").load(localStorage.getItem("currentPage"));
        // highlet LeftMenu
    }
    else
    {
        $("#dashboard li").addClass("leftMenuHighlight");
        $("#ChildrenDiv").load('dashboard.html');
    }
});
//data table
$(document).ready(function () {
    $('#dtBasicExample').DataTable();
    $('.dataTables_length').addClass('bs-select');
});
//-----------side bar and chart-----------------//
// --------Sidebar And Header------------ //
const $button  = document.querySelector('#sidebar-toggle');
const $wrapper = document.querySelector('#wrapper');

$button.addEventListener('click', (e) => {
  e.preventDefault();
  $wrapper.classList.toggle('toggled');
});

//  ----------- Chart.js-------- //

var ctx = document.getElementById('myChart')
ctx.height = 300,
ctx.width = 200
var data = {
	labels: [ 'Packed', 'Shipped', 'In Queue'],
	datasets: [{
		fill: false,
		label: 'Completed',
		borderColor: 'green',
		data: [20, 30, 40],
		borderWidth: 2,
		backgroundColor:[
			'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
		],
		lineTension: 0,
	}
	]
}