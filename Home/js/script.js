function showContent(id) {
    // Hide all content sections
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.add('hidden'));

    // Show the clicked content
    document.getElementById(id).classList.remove('hidden');
}
