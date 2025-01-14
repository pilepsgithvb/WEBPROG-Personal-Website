function showContent(id) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
}
