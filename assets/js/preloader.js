document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.querySelector('.preloader');
    const progressBar = document.querySelector('.progress');
    const logo = document.querySelector('.logo');
    
    // Simulate loading progress
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            
            // Add completion animation
            logo.style.animation = 'none';
            logo.style.transform = 'rotate(0)';
            
            // Hide preloader after slight delay
            setTimeout(() => {
                preloader.style.animation = 'fadeOut 0.5s ease forwards';
                
                // Remove preloader from DOM after animation completes
                setTimeout(() => {
                    preloader.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }, 500);
            }, 500);
        }
        progressBar.style.width = `${progress}%`;
    }, 300);
    
    // Alternatively, use this for real page loading:
    // window.addEventListener('load', function() {
    //     progressBar.style.width = '100%';
    //     setTimeout(() => {
    //         preloader.style.animation = 'fadeOut 0.5s ease forwards';
    //         setTimeout(() => {
    //             preloader.style.display = 'none';
    //             document.body.style.overflow = 'auto';
    //         }, 500);
    //     }, 500);
    // });
});