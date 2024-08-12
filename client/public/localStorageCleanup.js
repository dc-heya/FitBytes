// Function to check if it's a new day
function isNewDay() {
    // Retrieve the last access timestamp from localStorage
    const lastAccessTimestamp = localStorage.getItem('lastAccessTimestamp');
    
    // If no timestamp is found, or if it's a new day, return true
    if (!lastAccessTimestamp) {
        return true;
    } else {
        const lastAccessDate = new Date(parseInt(lastAccessTimestamp));
        const currentDate = new Date();
        // Compare year, month, and day to check if it's a new day
        return lastAccessDate.getFullYear() !== currentDate.getFullYear() ||
               lastAccessDate.getMonth() !== currentDate.getMonth() ||
               lastAccessDate.getDate() !== currentDate.getDate();
    }
}

// Function to clear localStorage
function clearLocalStorage() {
    // localStorage.clear();
    localStorage.removeItem('totalNutrients');
    localStorage.removeItem('clickedDivsBreakfast');
    localStorage.removeItem('clickedDivsLunch');
    localStorage.removeItem('clickedDivsSnacks');
    localStorage.removeItem('clickedDivsDinner');
    localStorage.removeItem('exercisePlan');
    
    // Update the last access timestamp to today's date
    localStorage.setItem('lastAccessTimestamp', Date.now().toString());
}

// Check if it's a new day and clear localStorage if necessary
if (isNewDay()) {
    clearLocalStorage();
}
