// Activity Feed Management
// This section is commented out as it is not currently used in the landing page layout.
// If you add an activity feed section to the HTML, uncomment this code.
/*
function initializeActivityFeed() {
    const activities = [
        {
            type: 'security',
            title: 'Blocked Suspicious IP',
            time: '2 minutes ago',
            icon: '🛡️'
        },
        {
            type: 'api',
            title: 'New API Endpoint Added',
            time: '5 minutes ago',
            icon: '🔌'
        },
        {
            type: 'performance',
            title: 'High Response Time Detected',
            time: '10 minutes ago',
            icon: '⚡'
        }
    ];

    const activityList = document.querySelector('.activity-list');
    if (!activityList) return; // Exit if the element doesn't exist

    function addActivity(activity) {
        const item = document.createElement('div');
        item.className = 'activity-item';
        item.innerHTML = `
            <div class="activity-icon">${activity.icon}</div>
            <div class="activity-content">
                <p class="activity-title">${activity.title}</p>
                <span class="activity-time">${activity.time}</span>
            </div>
        `;
        activityList.insertBefore(item, activityList.firstChild);

        // Remove old activities if more than 10
        if (activityList.children.length > 10) {
            activityList.removeChild(activityList.lastChild);
        }
    }

    // Add initial activities
    activities.forEach(activity => addActivity(activity));

    // Simulate new activities
    setInterval(() => {
        const randomActivity = activities[Math.floor(Math.random() * activities.length)];
        const newActivity = {
            ...randomActivity,
            time: 'Just now'
        };
        addActivity(newActivity);
    }, 30000); // Adds a new activity every 30 seconds
}
*/

// Initialize metering animations
// This section is commented out as it is not currently used in the landing page layout.
// If you add meter elements to the HTML, uncomment this code.
/*
function initializeMeters() {
    const meters = document.querySelectorAll('.meter-value');
    meters.forEach(meter => {
        const value = Math.random() * 100;
        // Assuming meter uses stroke-dashoffset for animation, circle radius 20, stroke-width 4
        // Circumference = 2 * PI * R = 2 * 3.14159 * 20 = 125.66
        // Using 126 as a round number close to circumference
        const circumference = 126;
        const offset = circumference - (value / 100 * circumference);
        meter.style.setProperty('--target-offset', offset);

         // Basic animation via CSS variable and transition
         meter.style.transition = 'stroke-dashoffset 2s ease-out';
         requestAnimationFrame(() => { // Use requestAnimationFrame to ensure transition applies
             meter.style.strokeDashoffset = offset;
         });
    });

    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        const value = Math.random() * 100;
        bar.style.transition = 'height 2s ease-out';
        requestAnimationFrame(() => { // Use requestAnimationFrame to ensure transition applies
             bar.style.height = `${value}%`;
        });
    });
}
*/


// Call initialization functions
document.addEventListener('DOMContentLoaded', () => {
    // initializeActivityFeed(); // Uncomment if activity feed HTML is added
    // initializeMeters(); // Uncomment if meter HTML is added

    // Particle initialization is already handled in index.html script block
    // Theme switching is already handled in index.html script block
});
