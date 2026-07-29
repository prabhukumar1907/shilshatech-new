document.addEventListener("DOMContentLoaded", function () {
       
    fetch("footer.html")
        .then(response => response.text())
        .then(footerHtml => {
           
            document.getElementById("footerContainer").innerHTML = footerHtml;
        })
        .catch(error => console.error("Error fetching navbar:", error));
});