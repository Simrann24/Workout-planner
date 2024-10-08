// script.js
document.addEventListener("DOMContentLoaded", function() {
    const navbarHTML = `
        <nav class="navbar">
            <div class="navbar-toggle" id="navbar-toggle">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            <ul id="navbar-list">
                <li><a href="#home">Home</a></li>
                <li><a href="./table.html">Workout Tracker</a></li>
                <li><a href="./index.html">BMI Calculator</a></li>
                <li><a href="#summary">Summary</a></li>
            </ul>
        </nav>
    `;

    const heroSectionHTML = `
        <section id="home" class="hero-section">
            <div class="hero-content">
                <h1>Welcome to Your Personal Fitness Tracker</h1>
                <p>
                    Discover the easiest way to track your workouts and monitor your health progress. Our Fitness Tracker empowers you 
                    to achieve your goals with personalized workout plans and accurate BMI measurements. Start your fitness journey today!
                </p>
                <a href="#features" class="cta-btn">Explore Features</a>
            </div>
        </section>
    `;

    const featuresSectionHTML = `
        <section id="features" class="features-section">
            <h2>Our Features</h2>
            <div class="features-container">
                <div class="feature-card">
                    <h3>Workout Tracker</h3>
                    <p>
                        Track and log your workouts easily. Keep a record of every session and monitor your performance over time.
                        Progress is just a log away!
                    </p>
                    <a href="./table.html" class="btn">Track Workouts</a>
                </div>

                <div class="feature-card">
                    <h3>BMI Calculator</h3>
                    <p>
                        Calculate your Body Mass Index (BMI) and understand where you stand. It’s simple and gives you a clear idea 
                        about your fitness.
                    </p>
                    <a href="./index.html" class="btn">Calculate BMI</a>
                </div>

                <div class="feature-card">
                    <h3>Nutrition Insights</h3>
                    <p>
                        Log your meals and get detailed insights into your nutrition. Our platform helps you balance your diet 
                        alongside your workout regime.
                    </p>
                    <a href="#" class="btn">Track Meals</a>
                </div>
            </div>
        </section>
    `;

    const footerHTML = `
        <footer>
            <p>© 2024 Fitness Tracker. All Rights Reserved.</p>
        </footer>
    `;

    document.body.innerHTML = navbarHTML + heroSectionHTML + featuresSectionHTML + footerHTML;

    const navbarToggle = document.getElementById("navbar-toggle");
    const navbarList = document.getElementById("navbar-list");

    navbarToggle.addEventListener("click", function() {
        navbarList.classList.toggle("active");
    });
});
