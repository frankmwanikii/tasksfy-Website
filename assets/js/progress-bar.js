document.addEventListener('DOMContentLoaded', function() {
    // Create progress bar element
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress-bar';
    
    // Style the progress bar
    progressBar.style.position = 'fixed';
    progressBar.style.top = '0';
    progressBar.style.left = '0';
    progressBar.style.height = '4px';
    progressBar.style.width = '0%';
    progressBar.style.backgroundColor = '#FBAE00';
    progressBar.style.zIndex = '9999';
    progressBar.style.transition = 'width 0.2s ease-out';
    
    // Add to the document
    document.body.appendChild(progressBar);
    
    // Update progress bar width as user scrolls
    window.addEventListener('scroll', function() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Calculate scroll percentage
        const scrollPercentage = (scrollTop / documentHeight) * 100;
        
        // Update progress bar width
        progressBar.style.width = scrollPercentage + '%';
    });
}); 