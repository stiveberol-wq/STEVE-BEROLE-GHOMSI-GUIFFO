document.getElementById("phishingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("result").innerHTML =
        "⚠️ This was a phishing simulation. Never enter your credentials on suspicious websites. Always verify the URL, sender, and website authenticity.";
});
