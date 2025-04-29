document.addEventListener('DOMContentLoaded', () => {
    console.log('FitTrack Workouts Page Loaded');

    // Filter tabs interactivity
    const filterTabs = document.querySelectorAll('.filter-tabs button');
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            console.log(`Filter selected: ${tab.textContent}`);
        });
    });

    // View toggle interactivity
    const viewToggles = document.querySelectorAll('.view-toggle button');
    viewToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            viewToggles.forEach(t => t.classList.remove('active'));
            toggle.classList.add('active');
            console.log(`View selected: ${toggle.textContent}`);
        });
    });
});