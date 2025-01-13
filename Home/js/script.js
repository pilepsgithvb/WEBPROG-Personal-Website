function showContent(sectionId) {
    // Get the content of the clicked section
    const content = document.getElementById(sectionId).innerHTML;

    // Display the content in the popup
    document.getElementById('popup-content').innerHTML = content;
    document.getElementById('popup').classList.remove('hidden');
}

function closePopup() {
    document.getElementById('popup').classList.add('hidden');
}
