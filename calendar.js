document.addEventListener('DOMContentLoaded', function () {
    const calendarElement = document.getElementById('calendar');
    const daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    const holidays = {
        13: 'Niños Héroes',
        15: 'Grito de Independencia',
        16: 'Día de la Independencia',
        27: 'Consumación de la Independencia',
        30: 'San Jerónimo'
    };

    // Render header with days of the week
    daysOfWeek.forEach(day => {
        const header = document.createElement('div');
        header.classList.add('day', 'header');
        header.textContent = day;
        calendarElement.appendChild(header);
    });

    // Create a calendar for September, starting on Friday (day 5 of the week)
    const totalDays = 30;
    const firstDayOfWeek = 5;

    // Render empty days before the first of September
    for (let i = 0; i < firstDayOfWeek; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.classList.add('day');
        calendarElement.appendChild(emptyDay);
    }

    // Render days of September
    for (let day = 1; day <= totalDays; day++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day', 'bg-light');
        dayElement.textContent = day;

        // Highlight holidays and add click event
        if (holidays[day]) {
            dayElement.classList.add('holiday');
            dayElement.title = holidays[day];

            // Add click event to show holiday info in a modal
            dayElement.addEventListener('click', () => {
                document.getElementById('modalBody').textContent = `${day} de Septiembre: ${holidays[day]}`;
                const infoModal = new bootstrap.Modal(document.getElementById('infoModal'));
                infoModal.show();
            });
        }

        calendarElement.appendChild(dayElement);
    }
});
