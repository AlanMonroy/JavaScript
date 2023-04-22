class ExcelPrinter{
    static print(tableId,llamar_excel_1){
        const table = document.getElementById(tableId);
        llamar_excel_1.header().forEach(title => {
            table.querySelector("thead>tr").innerHTML += `<td>${title}</td>`
        });
        for (let index=0;index<llamar_excel_1.rows().count();index++){
            const rows = llamar_excel_1.rows().get()[index];
            table.querySelector("tbody").innerHTML += `
                <tr>
                    <td></td>
                </tr>
                `
        }
    }
}

class ExcelPrinter {
    static print(tableId, llamar_excel_1) {
      const table = document.getElementById(tableId);
      const headerRow = table.querySelector("thead>tr");
  
      // Agregar los encabezados de columna dinámicamente
      llamar_excel_1.header().forEach(title => {
        const headerCell = document.createElement("td");
        headerCell.textContent = title;
        headerRow.appendChild(headerCell);
      });
  
      // Agregar los valores de cada fila y columna dinámicamente
      for (let rowIndex = 0; rowIndex < llamar_excel_1.rows().count(); rowIndex++) {
        const rowValues = llamar_excel_1.rows().get(rowIndex);
        console.log(rowValues);
        console.log(llamar_excel_1.rows().count())
        llamar_excel_1.rows().get(rowIndex)
        const rowElement = document.createElement("tr");
  
        for (let colIndex = 0; colIndex < rowValues.length -1; colIndex++) {
          const colValue = rowValues[colIndex];
          const colElement = document.createElement("td");
          colElement.textContent = colValue;
          rowElement.appendChild(colElement);
        }
  
        table.querySelector("tbody").appendChild(rowElement);
      }
    }
  }