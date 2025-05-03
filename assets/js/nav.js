// Progress bar animation
window.onscroll = function() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("myProgressBar").style.width = scrolled + "%";
};

// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navbarLinks = document.getElementById('navbarLinks');
    const dropdowns = document.querySelectorAll('.dropdown');
    const icon = mobileMenuToggle.querySelector('i');
    
    // Toggle mobile menu
    mobileMenuToggle.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event from bubbling up
        navbarLinks.classList.toggle('active');
        
        // Change icon
        if (navbarLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

   // Handle dropdown clicks in mobile view
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('.nav-link');
        
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                // Only proceed if menu is open
                if (navbarLinks.classList.contains('active')) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                    
                    // Close other open dropdowns
                    dropdowns.forEach(otherDropdown => {
                        if (otherDropdown !== dropdown && otherDropdown.classList.contains('active')) {
                            otherDropdown.classList.remove('active');
                        }
                    });
                }
            }
        });
    });



    // In the document click handler
document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
        setTimeout(() => {
            if (!navbarLinks.contains(e.target) && e.target !== mobileMenuToggle) {
                navbarLinks.classList.remove('active');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                
                dropdowns.forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
        }, 10);
    }
});



window.addEventListener('scroll', function() 
{
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) 
        {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
});
