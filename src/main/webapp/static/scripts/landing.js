$('.collapse').collapse()

$(document).ready( function(){

    $("#fflogs-url-input").on("keyup", function() {

        let url = $(this).val();

        if(url.match(/(\bfflogs.com\/reports\/\b)+([a-zA-Z0-9]{16})/g)){

            document.getElementById("fflogs-url-error-message").hidden = true;
        }
    })
})

document.getElementById("fflogs-url-button").addEventListener("click", function() {

    this.disabled = true;
    buildMain(document.getElementById("fflogs-url-input").value);
})


let baseUrl = "https://www.fflogs.com:443/v1";

function buildMain(url){

    getReport(url, processReport, getReportError);
}

function getReport(url, callback, errorCallback){

    let fightId = String(url.match(/(\b\/reports\/\b)+([a-zA-Z0-9]{16})/g)).substring(9);
    let apiUrl = baseUrl + "/report/fights/" + fightId + "?api_key=" + apiKey;
    let xhr = new XMLHttpRequest();

    xhr.open("GET", apiUrl);

    xhr.onreadystatechange = function() {

        if(xhr.readyState === 4 && xhr.status === 200){

            callback(xhr.response);
        }

        else if(xhr.readyState === 4){

            errorCallback();
        }
    }

    xhr.send();
}

function processReport(report){

    window.sessionStorage.setItem("report", report);

    let reportObj = JSON.parse(report);
    let reportList = document.getElementById("sidebar-report-nav-entries");

    document.getElementById("sidebar-report-nav").hidden = false;
    document.getElementById("sidebar-report-nav-header").textContent = reportObj.title;

    for(let fight of reportObj.fights){

        let listEntry = document.createElement("li");
        let listText = document.createElement("a");

        listEntry.setAttribute("class", "nav-item");

        listText.setAttribute("class", "nav-link sidebar-report");
        listText.setAttribute("href", "#");
        listText.setAttribute("id", "sidebar-report-nav-report-" + fight.zoneID + "-" + fight.id);
        listText.setAttribute("onclick", "onSidebarFightClick(this)")
        listText.textContent = fight.zoneName + " (" + calcDuration(fight) + ")";

        listEntry.append(listText);
        reportList.append(listEntry);

    }

    console.log(reportObj);
}

function calcDuration(fight){

    function pad(n, z) {
        z = z || 2;
        return ('00' + n).slice(-z);
    }

    let ellapsed = fight.end_time - fight.start_time;

    let s = parseInt(ellapsed / 1000);

    return parseInt(s / 60) + ":" + pad(s % 60);
}

function getReportError(){

    document.getElementById("fflogs-url-error-message").hidden = false;
    document.getElementById("fflogs-url-button").disabled = false;

}

function onSidebarFightClick(e){

    console.log("Hello");
}