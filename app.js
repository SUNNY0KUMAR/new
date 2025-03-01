document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault(); 

        let nationality = document.getElementById("nationality").value;
        let family = document.querySelector('input[name="family"]:checked').value;
        let occupation = document.getElementById("occupation").value;
        let crimeElements = document.querySelectorAll('input[name="crime"]:checked');
        let rehabilitation = document.querySelector('input[name="rehabilitation"]:checked').value;

        let crimes = [];
        crimeElements.forEach(crime => crimes.push(crime.value));

        let resultPage = "canal.html";  

        if (crimes.includes("loyal_soviet") && occupation !== "former_noble" && occupation !== "journalist" && rehabilitation === "agree" && nationality === "russian" && family.includes("none")) {
            resultPage = "safe.html";  
        }
        else if (party === "no" || family.includes("Father") || crimes.includes("treason") || crimes.includes("espionage")) {
            resultPage = "siberia.html"; 
        }
        else if (occupation === "former_noble" || crimes.includes("religion")) {
            resultPage = "mine.html"; 
        }
        else if (rehabilitation === "refuse") {
            resultPage = "execution.html";
        }
        else {
            resultPage = "canal.html";
        }

        window.location.href = `loading.html?page=${resultPage}`;
    });
});
