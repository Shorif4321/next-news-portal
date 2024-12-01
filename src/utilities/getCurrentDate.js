export function showCurrentDate() {
    const today = new Date();

    const day = today.toLocaleString('en-us', { weekday: 'long' });  // Full day of the week (e.g., Monday)
    const month = today.toLocaleString('en-us', { month: 'long' });  // Full month name (e.g., January)
    const date = today.getDate();
    const year = today.getFullYear();

    return `${day}, ${month} ${date}, ${year}`;
}


