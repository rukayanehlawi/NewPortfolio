// Ensure all videos play repeatedly
document.addEventListener('DOMContentLoaded', function() {
    // Get all video elements
    var videos = document.querySelectorAll('.portfolio-video');
    
    videos.forEach(function(video) {
        // Set video attributes
        video.setAttribute('autoplay', '');
        video.setAttribute('loop', '');
        video.setAttribute('muted', '');
        video.setAttribute('playsinline', '');
        
        // Force play
        video.muted = true;
        video.loop = true;
        
        // Try to play
        var playPromise = video.play();
        
        if (playPromise !== undefined) {
            playPromise.then(function() {
                // Video started playing
                console.log('Video playing:', video.src);
            }).catch(function(error) {
                // Auto-play was prevented
                console.log('Auto-play prevented:', error);
                // Try again on user interaction
                document.addEventListener('click', function() {
                    video.play();
                }, { once: true });
            });
        }
        
        // Ensure loop on video end
        video.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        });
    });
    
    // Check videos periodically
    setInterval(function() {
        videos.forEach(function(video) {
            if (video.paused && video.readyState >= 2) {
                video.play().catch(function(e) {
                    console.log('Replay attempt failed:', e);
                });
            }
        });
    }, 3000);
});
