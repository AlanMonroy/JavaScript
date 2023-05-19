class metodo_post{
    static insertar(llamar_excel_2){
        console.log(`Cantidad de registros: ${llamar_excel_2.rows().count()}`)
      // Agregar los valores de cada fila y columna dinámicamente
        for (let rowIndex = 0; rowIndex < llamar_excel_2.rows().count(); rowIndex++) {
            const rowValues = llamar_excel_2.rows().get(rowIndex);

            const info = {
                "FILA":rowIndex+1,
                "COORDINADOR": llamar_excel_2.rows().get(rowIndex).get_value(0),
                "MES": llamar_excel_2.rows().get(rowIndex).get_value(1),
                /*"PROVEEDOR": llamar_excel_2.rows().get(rowIndex).get_value(2),*/
                /*"NOMBRE_RECURSO": llamar_excel_2.rows().get(rowIndex).get_value(3),*/
                /*"PUESTO_RECURSO": llamar_excel_2.rows().get(rowIndex).get_value(4),*/
                "CORREO_ELECTRONICO": llamar_excel_2.rows().get(rowIndex).get_value(5),
                "FOLIO_PROYECTO": llamar_excel_2.rows().get(rowIndex).get_value(6),
                "CR": llamar_excel_2.rows().get(rowIndex).get_value(7),
                "SI_LEGACY": llamar_excel_2.rows().get(rowIndex).get_value(8),
                "SI_ORACLE": llamar_excel_2.rows().get(rowIndex).get_value(9),
                "NOMBRE_PROYECTO": llamar_excel_2.rows().get(rowIndex).get_value(10),
                "FECHA_INICIO_MES_FACTURAR": llamar_excel_2.rows().get(rowIndex).get_value(11),
                "FECHA_FIN_MES_FACTURAR": llamar_excel_2.rows().get(rowIndex).get_value(12),
                "FECHA_INICIO": llamar_excel_2.rows().get(rowIndex).get_value(13),
                "FECHA_FIN": llamar_excel_2.rows().get(rowIndex).get_value(14),
                "DIAS_DEL_MES": llamar_excel_2.rows().get(rowIndex).get_value(15),
                "DIAS_DE_ASIGNACION": llamar_excel_2.rows().get(rowIndex).get_value(16),
                "DIAS_FESTIVOS": llamar_excel_2.rows().get(rowIndex).get_value(17),
                "DIAS_VACACIONES": llamar_excel_2.rows().get(rowIndex).get_value(18),
                "HORAS_TOTALES_MES": llamar_excel_2.rows().get(rowIndex).get_value(19),
                "HORAS_DIA": llamar_excel_2.rows().get(rowIndex).get_value(20),
                "HORAS_LABORADAS": llamar_excel_2.rows().get(rowIndex).get_value(21),
                "PORCENTAJE_ASIGNACION": llamar_excel_2.rows().get(rowIndex).get_value(22),
                "TIPO_SERVICIO": llamar_excel_2.rows().get(rowIndex).get_value(23),
                "CONTACTO_VOBO": llamar_excel_2.rows().get(rowIndex).get_value(24),
                "CORREO_SOLICITUD_VOBO": llamar_excel_2.rows().get(rowIndex).get_value(25),
            };
                /*colElement.textContent = colValue;*/
            /*console.log(`DATA: ${JSON.stringify(info)}`)*/

            fetch('/ords/alere_qa/rest_ale_facturacion/insert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
            })
            .then(response => {
            console.log(`DATA: ${JSON.stringify(info)}`)
            if (response.ok) {return response.json();}
            throw new Error('Error al hacer la solicitud POST');})
            .then(data => {console.log(data);})
            .catch(error => {console.error('Error en la linea: ' + rowIndex +' - Descripcion: '+error);});
        }
    }
}

class llamar{
    constructor(numero){
        this.numero = numero;
    }

    sumar(){
        return this.numero + 1
    }
}

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
    longitud(){
        return this.row.length;
    }
    get_value(colIndex){
        return this.row[colIndex];
    }
}

class ExcelPrinter{
    static print(tableId, llamar_excel_1) {
      const table = document.getElementById(tableId);
      const headerRow = table.querySelector("thead>tr");
  
      // Agregar los encabezados de columna dinámicamente
      llamar_excel_1.header().forEach(title => {
        const headerCell = document.createElement("td");
        headerCell.textContent = title;
        headerRow.appendChild(headerCell);
      });
      
      console.log(`Cantidad de registros: ${llamar_excel_1.rows().count()}`)
      // Agregar los valores de cada fila y columna dinámicamente
      for (let rowIndex = 0; rowIndex < llamar_excel_1.rows().count(); rowIndex++) {
        const rowValues = llamar_excel_1.rows().get(rowIndex);

        const longitud = llamar_excel_1.rows().get(rowIndex).longitud();
        const rowElement = document.createElement("tr");
        for (let colIndex = 0; colIndex < longitud; colIndex++) {
            const colValue = llamar_excel_1.rows().get(rowIndex).get_value(colIndex);
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
    console.log(metodo_post.insertar(llamar_excel));

})
