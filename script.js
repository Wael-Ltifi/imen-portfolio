document.getElementById('contact-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    document.getElementById('about-content').style.display = 'none'; // Hide the main content
    document.getElementById('contact-section').style.display = 'block'; // Show the contact section
    document.getElementById('skills-section').style.display = 'none'; // Show the contact section
    document.getElementById('work-section').style.display = 'none'; // Show the contact section
});

document.getElementById('about-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    document.getElementById('about-content').style.display = 'block'; // Hide the main content
    document.getElementById('contact-section').style.display = 'none'; // Show the contact section
    document.getElementById('skills-section').style.display = 'none'; // Show the contact section
    document.getElementById('work-section').style.display = 'none'; // Show the contact section
});
document.getElementById('skills-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    document.getElementById('about-content').style.display = 'none'; // Hide the main content
    document.getElementById('contact-section').style.display = 'none'; // Show the contact section
    document.getElementById('skills-section').style.display = 'block'; // Show the contact section
    document.getElementById('work-section').style.display = 'none'; // Show the contact section
   
});

document.getElementById('work-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    document.getElementById('about-content').style.display = 'none'; // Hide the main content
    document.getElementById('contact-section').style.display = 'none'; // Show the contact section
    document.getElementById('skills-section').style.display = 'none'; // Show the contact section
    document.getElementById('work-section').style.display = 'block'; // Show the contact section
});




