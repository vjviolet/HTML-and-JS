window.onload = initAll;

function initAll() {
    var JSONObject = {
        "name": "ssss",
        "age": "44",
        "address": "ddd",
        "phone": "6777888"
    }

    document.getElementById("jname").innerHTML =  JSONObject.name;
}