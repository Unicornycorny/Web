document.addEventListener('DOMContentLoaded', function() {

    const savedParams = JSON.parse(localStorage.getItem('tableParams'));
    if (savedParams) {
        populateForm(savedParams);
    }
});

function generateTable() {

    const weekDays = Array.from(document.getElementById('weekDays').selectedOptions, option => option.value);
    const maxLessons = document.getElementById('maxLessons').value;
    const language = document.getElementById('language').value;

    const tableParams = { weekDays, maxLessons, language };
    localStorage.setItem('tableParams', JSON.stringify(tableParams));

    const tableContent = `Генерация таблицы для ${maxLessons} занятий на ${weekDays.length} днях недели на языке ${language}.`;
    
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.textContent = tableContent;
}

function populateForm(params) {
    const weekDaysSelect = document.getElementById('weekDays');
    params.weekDays.forEach(day => {
        const option = weekDaysSelect.querySelector(`[value="${day}"]`);
        if (option) {
            option.selected = true;
        }
    });

    document.getElementById('maxLessons').value = params.maxLessons;
    document.getElementById('language').value = params.language;
}
