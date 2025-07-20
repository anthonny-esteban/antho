const listaPDF = document.getElementById('listaPDF');
const btnAgregar = document.getElementById('btnAgregar');
const inputPDF = document.getElementById('inputPDF');

btnAgregar.addEventListener('click', () => {
    const archivo = inputPDF.files[0];
    if (!archivo || archivo.type !== 'application/pdf') {
        alert('Selecciona un archivo PDF válido.');
        return;
    }

    const li = document.createElement('li');
    li.textContent = archivo.name;

    const enlace = document.createElement('a');
    enlace.href = URL.createObjectURL(archivo);
    enlace.target = '_blank';
    enlace.textContent = 'Ver';
    enlace.style.marginRight = '10px';

    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.className = 'eliminar';
    btnEliminar.addEventListener('click', () => {
        listaPDF.removeChild(li);
    });

    li.innerHTML = '';
    li.appendChild(enlace);
    li.appendChild(btnEliminar);
    listaPDF.appendChild(li);

    inputPDF.value = '';
});
