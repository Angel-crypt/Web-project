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

// Función para generar el PDF
function generatePDF() {
    const { jsPDF } = window.jspdf;

    // Crear nuevo documento con orientación portrait
    const doc = new jsPDF();

    // Definir colores
    const primaryColor = "#1976D2";
    const secondaryColor = "#7B1FA2";
    const accentColor = "#00796B";
    const textColor = "#333333";
    const lightGray = "#F3F2EC";

    // Agregar cabecera con fondo de color
    doc.setFillColor(primaryColor);
    doc.rect(0, 0, 210, 40, "F");

    // Título del PDF
    doc.setFont("helvetica", "bold");
    doc.setTextColor("#FFFFFF");
    doc.setFontSize(24);
    doc.text('RESUMEN DE COMPRA', 105, 20, { align: "center" });

    // Fecha actual
    const currentDate = new Date().toLocaleDateString();
    doc.setFontSize(10);
    doc.text(`Fecha: ${currentDate}`, 105, 30, { align: "center" });

    // Sección de items
    doc.setDrawColor(primaryColor);
    doc.setLineWidth(0.5);
    doc.line(14, 50, 196, 50);

    // Título de la sección de items
    doc.setTextColor(primaryColor);
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text('Detalle de Productos', 14, 60);

    // Cabecera de la tabla
    const tableHeaders = ["Producto", "Precio Unit.", "Cantidad", "Subtotal"];
    const columnWidths = [80, 35, 35, 32];
    let startX = 14;
    let yPosition = 70;

    // Dibujar cabecera de tabla
    doc.setFillColor(lightGray);
    doc.rect(14, yPosition - 6, 182, 10, "F");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(textColor);

    tableHeaders.forEach((header, index) => {
        if (index === 0) {
            doc.text(header, startX, yPosition);
        } else {
            doc.text(header, startX + columnWidths[index - 1], yPosition, { align: "right" });
        }
        startX += columnWidths[index];
    });

    // Línea después de la cabecera
    yPosition += 4;
    doc.setDrawColor(accentColor);
    doc.line(14, yPosition, 196, yPosition);

    // Contenido de la tabla
    yPosition += 10;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);

    // Alternar colores de fila
    let rowCount = 0;

    items.forEach(item => {
        // Alternar colores de fondo para filas
        if (rowCount % 2 === 1) {
            doc.setFillColor(245, 245, 245);
            doc.rect(14, yPosition - 6, 182, 10, "F");
        }

        // Texto de los items
        startX = 14;
        const subtotal = (item.price * item.quantity).toFixed(2);

        // Producto
        doc.text(item.name, startX, yPosition);

        // Precio unitario
        doc.text(`$${item.price.toFixed(2)}`, startX + columnWidths[0], yPosition, { align: "right" });

        // Cantidad
        doc.text(`${item.quantity}`, startX + columnWidths[0] + columnWidths[1], yPosition, { align: "right" });

        // Subtotal
        doc.text(`$${subtotal}`, startX + columnWidths[0] + columnWidths[1] + columnWidths[2], yPosition, { align: "right" });

        yPosition += 10;
        rowCount++;
    });

    // Línea después de los items
    doc.setDrawColor(accentColor);
    doc.line(14, yPosition, 196, yPosition);
    yPosition += 15;

    // Sección de resumen
    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.16;
    const total = subtotal + tax;

    // Crear un box para el resumen
    doc.setFillColor(lightGray);
    doc.roundedRect(120, yPosition - 5, 76, 50, 3, 3, "F");

    // Datos del resumen
    doc.setFont("helvetica", "normal");
    doc.setTextColor(textColor);
    doc.setFontSize(11);

    doc.text(`Subtotal:`, 125, yPosition + 5);
    doc.text(`$${subtotal.toFixed(2)}`, 196, yPosition + 5, { align: "right" });

    doc.text(`Impuesto (16%):`, 125, yPosition + 25);
    doc.text(`$${tax.toFixed(2)}`, 196, yPosition + 15, { align: "right" });

    // Línea antes del total
    doc.setDrawColor(secondaryColor);
    doc.line(125, yPosition + 20, 196, yPosition + 45);

    // Total con estilo destacado
    doc.setFont("helvetica", "bold");
    doc.setTextColor(secondaryColor);
    doc.setFontSize(14);
    doc.text(`TOTAL:`, 125, yPosition + 30);
    doc.text(`$${total.toFixed(2)}`, 196, yPosition + 30, { align: "right" });

    // Pie de página
    doc.setDrawColor(primaryColor);
    doc.setLineWidth(0.5);
    doc.line(14, 270, 196, 270);

    doc.setFont("helvetica", "italic");
    doc.setTextColor(textColor);
    doc.setFontSize(9);
    doc.text("Gracias por su compra", 105, 280, { align: "center" });

    // Descargar el PDF
    doc.save('resumen-compra.pdf');
    alert("PDF descargado exitosamente.");
}