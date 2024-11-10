import { jsPDF } from "jspdf";

document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.getElementById('downloadButton') as HTMLButtonElement;
    const shareButton = document.getElementById('shareButton') as HTMLButtonElement;
    const resumeLinkDiv = document.getElementById('resumeLink') as HTMLDivElement;
    const usernameField = document.getElementById('usernameField') as HTMLInputElement;  // Assuming you have an input for the username

    // Generate Unique URL based on the user’s name
    function generateResumeURL(username: string) {
        return `https://${username}.vercel.app/resume`;
    }

    // Share resume link functionality
    shareButton.addEventListener('click', () => {
        const username = usernameField?.value || 'muhammadshayan'; // Use dynamic username or fallback to a default one
        const resumeURL = generateResumeURL(username);
        resumeLinkDiv.innerHTML = `Your resume link: <a href="${resumeURL}" target="_blank">${resumeURL}</a>`;

        // Optionally, copy the link to clipboard
        navigator.clipboard.writeText(resumeURL).then(() => {
            alert('Resume link copied to clipboard!');
        }).catch((err) => {
            console.error('Failed to copy text to clipboard:', err);
        });
    });

    // PDF download functionality
    downloadButton.addEventListener('click', () => {
        const doc = new jsPDF();

        // Use doc.html() to generate a PDF from a specific part of the page
        doc.html(document.querySelector('#resumeContent') as HTMLElement, {
            callback: function (doc) {
                doc.save('resume.pdf');
            },
            x: 10,
            y: 10
        });
    });
});
