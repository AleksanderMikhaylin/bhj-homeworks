const editor = document.getElementById('editor');

if (localStorage.editText) {
  editor.value = localStorage.editText;
}
window.addEventListener('unload', event => {

  const textArea = editor.value;
  if (textArea == undefined) {
      textArea = '';
  }
  if (textArea !== undefined) {
  localStorage.setItem('editText', textArea);
  }  
})
