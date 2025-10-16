function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("active");
}

function openCalculator() {
    let win = window.open('calcu.html', '_blank', 'width=350,height=500,top=100,left=100,menubar=no,toolbar=no,location=no,status=no,resizable=no');
}
function openweather() {
    let win = window.open('weather.html', '_blank', 'width=350,height=500,top=100,left=100,menubar=no,toolbar=no,location=no,status=no,resizable=no');
}
function openKSVEG() {
    window.parent.location.href="https://samebinesar.github.io/KSVEGETABLES.com/";
}
function opentaskbuddy() {
    window.parent.location.href="https://samebinesar.github.io/Taskbuddy/";
}
document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("menu");
    const menuItems = menu.querySelectorAll("li a");
    const menuToggle = document.getElementById("menu-toggle"); // Your hamburger button

    menuItems.forEach((item) => {
        item.addEventListener("click", function () {
            menu.classList.remove("open"); // Hide menu
            menuToggle.checked = false; // Uncheck the hamburger toggle (if using checkbox)
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Get the URL parameter "section"
    const urlParams = new URLSearchParams(window.location.search);
    const section = urlParams.get("section");

    // Scroll to the section after the page reloads
    if (section) {
        const targetElement = document.getElementById(section);
        if (targetElement) {
            setTimeout(() => {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }, 300); // Adding delay for smooth experience
        }
    }
});


function runPythonCalculator() {
    fetch('http://localhost:5000/run-calculator')  // Local Flask API
        .then(response => response.json())
        .then(data => console.log(data.message))
        .catch(error => console.error('Error:', error));
}

function press(value) {
    document.getElementById("display").value += value;
}

function calculate() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (error) {
        alert("Invalid Expression");
    }
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function openCalculator() {
    window.open('calcu.html', '_blank', 'width=350,height=500,top=100,left=500,toolbar=no,menubar=no,scrollbars=no,resizable=no');

}
