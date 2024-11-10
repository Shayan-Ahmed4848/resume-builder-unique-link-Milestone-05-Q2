"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jspdf_1 = require("jspdf");
document.addEventListener('DOMContentLoaded', function () {
    var downloadButton = document.getElementById('downloadButton');
    var shareButton = document.getElementById('shareButton');
    var resumeLinkDiv = document.getElementById('resumeLink');
    var usernameField = document.getElementById('usernameField'); // Assuming you have an input for the username
    // Generate Unique URL based on the user’s name
    function generateResumeURL(username) {
        return "https://".concat(username, ".vercel.app/resume");
    }
    // Share resume link functionality
    shareButton.addEventListener('click', function () {
        var username = (usernameField === null || usernameField === void 0 ? void 0 : usernameField.value) || 'muhammadshayan'; // Use dynamic username or fallback to a default one
        var resumeURL = generateResumeURL(username);
        resumeLinkDiv.innerHTML = "Your resume link: <a href=\"".concat(resumeURL, "\" target=\"_blank\">").concat(resumeURL, "</a>");
        // Optionally, copy the link to clipboard
        navigator.clipboard.writeText(resumeURL).then(function () {
            alert('Resume link copied to clipboard!');
        }).catch(function (err) {
            console.error('Failed to copy text to clipboard:', err);
        });
    });
    // PDF download functionality
    downloadButton.addEventListener('click', function () {
        var doc = new jspdf_1.jsPDF();
        // Use doc.html() to generate a PDF from a specific part of the page
        doc.html(document.querySelector('#resumeContent'), {
            callback: function (doc) {
                doc.save('resume.pdf');
            },
            x: 10,
            y: 10
        });
    });
});
