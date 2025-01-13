
function showContent(id) {
    document.querySelectorAll('.content').forEach(content => content.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
    }
  
