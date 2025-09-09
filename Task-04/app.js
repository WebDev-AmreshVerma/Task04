// Get all navigation items and pages
        const navItems = document.querySelectorAll('.nav-item');
        const pages = document.querySelectorAll('.page');
        const courseCards = document.querySelectorAll('.course-card');
        const backBtn = document.getElementById('back-btn');
        const videoPlayer = document.getElementById('video-player');

        // Function to show a specific page
        function showPage(pageId) {
            // Hide all pages
            pages.forEach(page => page.classList.remove('active'));
            
            // Show selected page
            const targetPage = document.getElementById(pageId);
            if (targetPage) {
                targetPage.classList.add('active');
            }

            // Update navigation active state
            navItems.forEach(item => item.classList.remove('active'));
            const activeNavItem = document.querySelector(`[data-page="${pageId}"]`);
            if (activeNavItem) {
                activeNavItem.classList.add('active');
            }
        }

        // Add click event listeners to navigation items
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                const pageId = item.getAttribute('data-page');
                showPage(pageId);
            });
        });

        // Add click event listeners to course cards
        courseCards.forEach(card => {
            card.addEventListener('click', (e) => {
                // Only trigger if not clicking on a button
                if (!e.target.classList.contains('btn')) {
                    showPage('course-detail');
                }
            });
        });

        // Back button functionality
        backBtn.addEventListener('click', () => {
            showPage('courses');
        });

        // Video player functionality
        videoPlayer.addEventListener('click', () => {
            // Simulate video playing
            videoPlayer.innerHTML = `
                <div style="text-align: center;">
                    <div style="font-size: 2rem; margin-bottom: 1rem;">⏸️</div>
                    <p>Video is now playing...</p>
                    <p style="font-size: 0.9rem; opacity: 0.8;">Advanced JavaScript - Promises and Async Programming</p>
                    <div style="margin-top: 1rem; background: rgba(255,255,255,0.2); padding: 0.5rem; border-radius: 5px;">
                        <div style="font-size: 0.9rem;">05:30 / 15:30</div>
                        <div style="width: 200px; height: 4px; background: rgba(255,255,255,0.3); margin: 0.5rem auto; border-radius: 2px;">
                            <div style="width: 35%; height: 100%; background: white; border-radius: 2px;"></div>
                        </div>
                    </div>
                </div>
            `;
        });

        // Lesson item functionality
        const lessonItems = document.querySelectorAll('.lesson-item');
        lessonItems.forEach(item => {
            item.addEventListener('click', () => {
                // Simulate loading different lesson
                const lessonTitle = item.querySelector('div div').textContent;
                document.querySelector('.video-container h3').textContent = `Current Lesson: ${lessonTitle}`;
                
                // Reset video player
                videoPlayer.innerHTML = `
                    <div class="video-placeholder">
                        <div>
                            <div style="font-size: 3rem; margin-bottom: 1rem;">▶️</div>
                            <p>Click to play video lesson</p>
                            <p style="font-size: 0.9rem; opacity: 0.8;">${lessonTitle}</p>
                        </div>
                    </div>
                `;
            });
        });

        // Simulate progress updates when marking lessons complete
        const markCompleteBtn = document.querySelector('.video-controls .btn-primary');
        markCompleteBtn.addEventListener('click', () => {
            alert('Lesson marked as complete! Your progress has been updated.');
            
            // Update progress bar (simulate increase)
            const progressFills = document.querySelectorAll('.progress-fill');
            progressFills.forEach(fill => {
                const currentWidth = parseInt(fill.style.width);
                if (currentWidth < 100) {
                    fill.style.width = `${Math.min(currentWidth + 10, 100)}%`;
                }
            });
        });

        // Add some interactive animations
        document.querySelectorAll('.stat-card, .course-card, .achievement-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Simulate loading states for buttons
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const originalText = btn.textContent;
                btn.textContent = 'Loading...';
                btn.disabled = true;
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.disabled = false;
                }, 1000);
            });
        });

        console.log('eLearning Platform loaded successfully! 🎓');