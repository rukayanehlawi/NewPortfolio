// Video Autoplay on Hover
document.addEventListener('DOMContentLoaded', function() {
    const videoBoxes = document.querySelectorAll('.video-box');
    
    videoBoxes.forEach(function(box) {
        const video = box.querySelector('.portfolio-video');
        
        if (video) {
            // Play video on hover
            box.addEventListener('mouseenter', function() {
                video.play().catch(function(error) {
                    console.log('Autoplay prevented:', error);
                });
            });
            
            // Pause video when not hovering
            box.addEventListener('mouseleave', function() {
                video.pause();
                video.currentTime = 0; // Reset to start
            });
            
            // Ensure video starts playing on page load (muted)
            video.muted = true;
            video.play().catch(function(error) {
                console.log('Initial autoplay prevented:', error);
            });
        }
    });
});
