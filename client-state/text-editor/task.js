const editor = document.getElementById('editor');

if (localStorage.getItem('editText') !== null) {
  editor.value = localStorage.editText;
}
window.addEventListener('unload', event => {
	localStorage.setItem('editText', editor.value);
	}
)
