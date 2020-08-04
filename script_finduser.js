var data = [
    ["Dillon Sokray", "dSok42", "United States", "A"],
    ["Mike Vay", "MikeyV12", "United States", "A"],
    ["Denard Robinson", "dRob2", "United States", "U"],
    ["Roberto Santiago", "SantySant", "United States", "A"],
    ["Bill Bob", "BobbyBoy24", "United States", "U"]
];

var rowCount;

document.getElementById('btnSearch').onclick = function() {search();}

function search(){

    clearRows();

    var strSearch = document.getElementById("txtSearch").value;

    rowCount = 1;

    if(strSearch){

        for(var i = 0; i < data.length; i++){
            
            if(data[i][0].includes(strSearch)){
                var table = document.getElementById("resultTable");

                var row = table.insertRow(rowCount);
                rowCount++;

                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);

                cell1.innerHTML = data[i][0];
                cell2.innerHTML = data[i][1];
                cell3.innerHTML = data[i][2];
                cell4.innerHTML = data[i][3];
            }
        }

    }

}

function clearRows(){
    var table = document.getElementById("resultTable");

    for(var j = table.rows.length - 1; j > 0; j--){
        table.deleteRow(j);
    }
}


//CREATE A LOADING SPINNER NEXT
//Also copy logic to forums page