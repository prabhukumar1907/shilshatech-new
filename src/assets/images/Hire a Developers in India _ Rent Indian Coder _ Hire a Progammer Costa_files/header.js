document.addEventListener("DOMContentLoaded", function () {
       
    fetch("header.html")
        .then(response => response.text())
        .then(headerHtml => {
           
            document.getElementById("headerContainer").innerHTML = headerHtml;
        })
        .catch(error => console.error("Error fetching navbar:", error));
});