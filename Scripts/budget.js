// Intentar cargar los ítems del localStorage al iniciar
const items = JSON.parse(localStorage.getItem('items')) || [];

// Asegurarse de que la tabla y el resumen se actualicen al cargar la página
updateTable();
updateSummary();

// Evento para agregar un nuevo ítem
document.getElementById('itemForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtener los valores de los campos del formulario
    const name = document.getElementById('itemName').value;
    const price = parseFloat(document.getElementById('itemPrice').value);
    const quantity = parseInt(document.getElementById('itemQuantity').value);

    // Agregar el ítem al arreglo
    addItem({ name, price, quantity });

    // Limpiar el formulario
    this.reset();
});

// Función para agregar un ítem
function addItem(item) {
    items.push(item);
    updateTable();
    updateSummary();
    // Guardar los ítems en el localStorage
    localStorage.setItem('items', JSON.stringify(items));
}

// Función para eliminar un ítem
function removeItem(index) {
    items.splice(index, 1);
    updateTable();
    updateSummary();
    // Actualizar el localStorage después de eliminar
    localStorage.setItem('items', JSON.stringify(items));
}

// Función para actualizar la cantidad de un ítem
function updateQuantity(index, newQuantity) {
    items[index].quantity = parseInt(newQuantity);
    updateTable();
    updateSummary();
    // Guardar los ítems actualizados en el localStorage
    localStorage.setItem('items', JSON.stringify(items));
}

// Función para actualizar la tabla de ítems
function updateTable() {
    const tbody = document.querySelector('#itemsTable tbody');
    tbody.innerHTML = '';

    items.forEach((item, index) => {
            const row = tbody.insertRow();
            row.innerHTML = `
        <td style="background-color: var(--input); color: var(--foreground);">${item.name}</td>
        <td style="background-color: var(--input); color: var(--foreground);">$${item.price.toFixed(2)}</td>
        <td style="background-color: var(--input); color: var(--foreground);">
            <input type="number" min="1" value="${item.quantity}"
                class="form-control form-control-sm w-75"
                onchange="updateQuantity(${index}, this.value)">
        </td>
        <td style="background-color: var(--input); color: var(--foreground);">$${(item.price * item.quantity).toFixed(2)}</td>
        <td style="background-color: var(--input); color: var(--foreground);">
            <button class="btn btn-danger btn-sm" onclick="removeItem(${index})">
                Eliminar
            </button>
        </td>
    `;
    });
}

// Función para actualizar el resumen de la compra
function updateSummary() {
    const totalItems = items.length;
    const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.16;
    const total = subtotal + tax;

    // Actualizar los valores en el resumen
    document.getElementById('totalItems').textContent = totalItems;
    document.getElementById('totalQuantity').textContent = totalQuantity;
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

// Función para crear el PDF
function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Definir colores
    const primaryColor = "#1976D2";
    const secondaryColor = "#7B1FA2";
    const accentColor = "#00796B";
    const textColor = "#333333";
    const lightGray = "#F3F2EC";

    // Obtener los ítems del localStorage
    const items = JSON.parse(localStorage.getItem('items')) || []; // Asegurarse de que no esté vacío

    // Verificar si hay ítems
    if (items.length === 0) {
        alert("No hay ítems para generar la factura.");
        return;
    }

    let yPosition = 60; // Inicia en una posición superior para dejar espacio al encabezado

    // Título
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor(primaryColor);
    doc.text("Factura", 14, 30);

    // Encabezados de la tabla
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(textColor);
    doc.text("Producto", 14, yPosition);
    doc.text("Cantidad", 100, yPosition);
    doc.text("Precio", 140, yPosition);
    doc.text("Total", 180, yPosition);
    yPosition += 10;

    doc.setFont("helvetica", "normal");

    // Imprimir los ítems
    items.forEach(item => {
        const totalItem = item.price * item.quantity;

        doc.text(item.name, 14, yPosition);
        doc.text(item.quantity.toString(), 100, yPosition);
        doc.text(`$${item.price.toFixed(2)}`, 140, yPosition);
        doc.text(`$${totalItem.toFixed(2)}`, 180, yPosition, { align: "right" });

        yPosition += 10;
    });

    // Línea después de los ítems
    doc.setDrawColor(accentColor);
    doc.line(14, yPosition, 196, yPosition);
    yPosition += 15;

    // Calcular totales
    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.16;
    const total = subtotal + tax;

    // Cuadro resumen
    doc.setDrawColor(accentColor);
    doc.setFillColor('#EEEEEE');
    doc.roundedRect(122, yPosition - 3, 76, 50, 3, 3, 'F');
    doc.setFillColor(lightGray);
    doc.roundedRect(120, yPosition - 5, 76, 50, 3, 3, 'FD');

    doc.setFont("helvetica", "normal");
    doc.setTextColor(textColor);
    doc.setFontSize(11);
    doc.text(`Subtotal:`, 125, yPosition + 5);
    doc.text(`$${subtotal.toFixed(2)}`, 186, yPosition + 5, { align: "right" });

    doc.text(`Impuesto (16%):`, 125, yPosition + 15);
    doc.text(`$${tax.toFixed(2)}`, 186, yPosition + 15, { align: "right" });

    doc.setDrawColor(secondaryColor);
    doc.setLineWidth(0.5);
    doc.line(125, yPosition + 20, 186, yPosition + 20);

    doc.setFont("helvetica", "bold");
    doc.setTextColor(secondaryColor);
    doc.setFontSize(14);
    doc.text(`TOTAL:`, 125, yPosition + 35);
    doc.text(`$${total.toFixed(2)}`, 186, yPosition + 35, { align: "right" });

    // Términos y condiciones
    yPosition += 60;
    doc.setFont("helvetica", "italic");
    doc.setTextColor(textColor);
    doc.setFontSize(8);
    doc.text("* Los precios incluyen IVA. El pago debe realizarse dentro de los próximos 30 días.", 14, yPosition);
    doc.text("* Para cualquier consulta relacionada con esta factura, póngase en contacto con nuestro departamento de atención al cliente.", 14, yPosition + 4);

    // Pie de página
    doc.setDrawColor(primaryColor);
    doc.setLineWidth(0.5);
    doc.line(14, 270, 196, 270);

    doc.setFont("helvetica", "normal");
    doc.setTextColor(textColor);
    doc.setFontSize(9);
    doc.text("Gracias por cotizar en ProjectHub", 105, 275, { align: "center" });
    doc.setFontSize(8);
    doc.text("www.ProjectHub.com | contacto@projecthub.com | Tel: (123) 456-7890", 105, 280, { align: "center" });

    doc.text(`Página 1 de 1`, 196, 285, { align: "right" });

    // Fecha para nombre del archivo
    const fechaActual = new Date().toISOString().slice(0, 10);
    doc.save(`Factura-${fechaActual}.pdf`);

    if (typeof showNotification === 'function') {
        showNotification("Factura generada exitosamente");
    } else {
        alert("Factura generada exitosamente.");
    }
}
