//eye tracker
document.addEventListener("DOMContentLoaded", function () {
    // Show the default image when the page loads
    showEye("topLeft");

}); document.addEventListener("mousemove", function (event) {
    // Get the container element and its dimensions
    var container = document.querySelector(".eye-container");
    var containerRect = container.getBoundingClientRect();

    // Calculate the center of the container
    var centerX = containerRect.left + containerRect.width / 2;
    var centerY = containerRect.top + containerRect.height / 2;

    // Get the mouse position relative to the center of the container
    var mouseX = event.clientX - centerX;
    var mouseY = event.clientY - centerY;

    // Calculate the angle of the mouse position relative to the center
    var angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

    // Determine which image (eye direction) to show based on the angle
    if (angle >= -45 && angle < 45) {
        // Show up-right image
        showEye("topRight");
    } else if (angle >= 45 && angle < 135) {
        // Show down-right image
        showEye("downRight");
    } else if (angle >= -135 && angle < -45) {
        // Show up-left image
        showEye("topLeft");
    } else {
        // Show down-left image (default)
        showEye("downLeft");
    }
});

// Function to show the specified eye image and hide others
function showEye(idToShow) {
    var eyes = document.querySelectorAll(".eye");
    for (var i = 0; i < eyes.length; i++) {
        if (eyes[i].id === idToShow) {
            eyes[i].style.display = "block";
        } else {
            eyes[i].style.display = "none";
        }
    }
}

//hide job descriptions
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.toggle-btn');
    const contents = document.querySelectorAll('.content');

    // Show the initially active content (content4)
    const activeContent = document.getElementById('content4');
    activeContent.classList.add('active');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const target = this.getAttribute('data-target');

            // Hide content4 if any button except content4 is clicked
            if (target !== 'content4') {
                activeContent.classList.remove('active');
            }

            // Toggle the visibility of other content sections
            contents.forEach(content => {
                if (content.id === target) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const jobButtons = document.querySelectorAll('.multijob');
    const employmentSummaries = document.querySelectorAll('.employmentsummarySeasoned');

    // Show the default employment summary (first one) initially
    employmentSummaries[0].classList.add('active');
    jobButtons[0].classList.add('active'); // Highlight the first button initially

    // Add click event listeners to each job button
    jobButtons.forEach(function (button, index) {
        button.addEventListener('click', function () {
            // Hide all employment summaries
            employmentSummaries.forEach(function (summary) {
                summary.classList.remove('active');
            });

            // Show the clicked employment summary
            employmentSummaries[index].classList.add('active');

            // Update active state for buttons
            jobButtons.forEach(function (btn) {
                btn.classList.remove('active');
            });
            button.classList.add('active');
        });
    });
});
//email me
function sendEmail() {
    const recipientEmail = 'maegen.k.moher@gmail.com';
    window.location.href = 'mailto:' + recipientEmail;
}

//redirect to linkedin
function redirectToLinkedIn() {
    window.location.href = 'https://www.linkedin.com/in/danimoher';
}
//redirect to github
function redirectToGithub() {
    window.location.href = 'https://github.com/danimoher';
}
//redirect to codepen
function redirectToCodepen() {
    window.location.href = 'https://codepen.io/danimoher';
}
//scroll to specific section of page
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        var offset = section.offsetTop - 120;
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    }
}
//button redirect to file
const button = document.querySelectorAll('.resume');
button.forEach(button => {
    button.onclick = function () {
        window.location.href = 'images/Maegen (Dani) Moher Resume.pdf';
    };
});