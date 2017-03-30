$.ajax({
    url         : "http://localhost/MenampilkanJson/statistik.json",
    type        : "GET",
    dataType    : "json",
    data        : {get_param : 'value'},
    success     : function(data){
        
        jmlData = data.length;
        buatTabel = "";
        for(a = 0; a < jmlData; a++){
            buatTabel += "<tr>"
                        + "<td>" + data[a]["id"] + "</td>"
                        + "<td>" + data[a]["nip"] + "</td>"
                        + "<td>" + data[a]["latitude"] + "</td>"
                        + "<td>" + data[a]["longitude"] + "</td>"
                        + "<td>" + data[a]["presensi_ke"] + "</td>"
                        + "<td>" + data[a]["macaddress"] + "</td>"
                        + "<td>" + data[a]["created_at"] + "</td>"
                + "<tr/>";
        }
        document.getElementsByTagName("table")[0].innerHTML += buatTabel;
        document.getElementsByTagName('textarea')[0].value = jmlData;
    }
});