class Excel{
    constructor(contenido){
        this.contenido = contenido;
    }
    header(){return this.contenido[0];}
    rows(){return new RowCollection(this.contenido.slice(1,this.contenido.length));}
}

class RowCollection{
    constructor(rows){
        this.rows = rows;
    }
    get(index){
        return new Row(this.rows[index]);
    }
    count(){
        return this.rows.length;
    }
}

class Row{
    constructor(row){
        this.row = row;
    }
    name(){
        return this.row[0];
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
  
        for (let colIndex = 0; colIndex < rowValues.length; colIndex++) {
          const colValue = rowValues[colIndex];
          const colElement = document.createElement("td");
          colElement.textContent = colValue;
          rowElement.appendChild(colElement);
        }
  
        table.querySelector("tbody").appendChild(rowElement);
      }
    }
  }
  

const inputExcel = document.getElementById('excel');
inputExcel.addEventListener('change', async function(){
    const contenido = await readXlsxFile(inputExcel.files[0]);
    
    const llamar_excel = new Excel(contenido);
    /*console.log(llamar_excel.rows().get(2));*/
    console.log(ExcelPrinter.print("tabla_excel", llamar_excel));
})

