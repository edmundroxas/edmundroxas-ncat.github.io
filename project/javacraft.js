$(document).ready(function () {
    var javacraftLoaded = true; //variable to show that this file has loaded
    console.log("javacraft.js is loaded");
    
    // Check if javacraftLoaded variable is defined (meaning javacraft.js is loaded)
    if (typeof javacraftLoaded !== 'undefined' && javacraftLoaded === true) {
        console.log("javacraft.js is loaded successfully!");
    } else {
        console.error("javacraft.js is not loaded.");
    }
    
    // Check if jQuery is available
    if (typeof $ === 'undefined') {
        console.error("jQuery is not loaded!");
        return;
    }
    
    // Check if Cycle2 is available
    if (typeof $.fn.cycle === 'undefined') {
        console.error("Cycle2 plugin is not loaded!");
        return;
    }

    // Slideshow toggle for Cycle2
    let $slideshow = $(".cycle-slideshow");
    
    $slideshow.on("click", function() {
        if ($slideshow.is(".cycle-paused"))
            $slideshow.cycle("resume");                
        else
            $slideshow.cycle("pause");
    });
    
    // Datepicker initialization
    $("#datepicker").datepicker();
    
    // Add event listeners using jQuery
    $('#homeLink').click(function(event) {
        alert('Home page link clicked!');
    });

    $('#aboutLink').hover(function() {
        alert('Hovered over About Us link!');
    });

    // Click event on image
    $('#heroImage').click(function() {
        alert('Hero image clicked!');
    });

    // Social media links: adding hover effects
    $('#facebookLink').hover(function() {
        $(this).css('color', '#3b5998'); // Facebook blue
    }, function() {
        $(this).css('color', ''); // Reset color when hover ends
    });

    $('#twitterLink').hover(function() {
        $(this).css('color', '#1DA1F2'); // Twitter blue
    }, function() {
        $(this).css('color', ''); // Reset color when hover ends
    });

    $('#instagramLink').hover(function() {
        $(this).css('color', '#C13584'); // Instagram purple
    }, function() {
        $(this).css('color', ''); // Reset color when hover ends
    });

    // Plain JavaScript click event handler for logo
    $('#logo').click(function() {
        alert('Logo clicked!');
    });

$(document).ready(function () {
    // Initialize the datepicker
    $("#datepicker").datepicker();

    // Handle form submission
    $("#contactForm").on("submit", function (e) {
        e.preventDefault(); // Prevent default form submission

        // Gather form data
        const formData = new FormData();
        formData.append("name", $("#name").val());
        formData.append("email", $("#email").val());
        formData.append("date", $("#datepicker").val());
        formData.append("message", $("#message").val());

        // Send AJAX POST request
        $.ajax({
            url: "https://formkeep.com/f/76e33a581a6f",
            type: "POST",
            data: formData,
            processData: false,
            contentType: false,
            success: function () {
                // Update page with success message
                $("#responseMessage").html(
                    `<p>Thank you, ${$("#name").val()}. Your message has been sent successfully!</p>`
                );
                $("#contactForm")[0].reset(); // Clear the form
            },
            error: function () {
                // Update page with error message
                $("#responseMessage").html(
                    `<p>There was an error sending your message. Please try again later.</p>`
                );
            },
        });
    });
});
