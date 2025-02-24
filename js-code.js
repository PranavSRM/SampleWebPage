// Function to track user preferences
function trackPreference(buttonName) {
    // Log the button click (this could be sent to a server)
    console.log(`User clicked: ${buttonName}`);
    
    // Store the preference in local storage
    let preferences = JSON.parse(localStorage.getItem('preferences')) || [];
    preferences.push(buttonName);
    localStorage.setItem('preferences', JSON.stringify(preferences));
    
    // Display a message to the user
    alert(`You clicked ${buttonName}. Your preference has been saved.`);
}
// Function to display personalized content based on preferences
function displayPersonalizedContent() {
    let preferences = JSON.parse(localStorage.getItem('preferences')) || [];
    if (preferences.length > 0) {
        alert(`Welcome back! Based on your preferences, you like: ${preferences.join(', ')}`);
    }
}
// Call the function to display personalized content when the page loads
window.onload = displayPersonalizedContent;
