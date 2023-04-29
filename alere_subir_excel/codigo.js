/*CODIGO PARA REST*/
/*GET*/
fetch('/ords/alere_qa/rest_afectacion/ale_info')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));

/*POST*/
class metodo_post{
  static insertar(llamar_excel_2){
      console.log(`Cantidad de registros: ${llamar_excel_2.rows().count()}`)
    // Agregar los valores de cada fila y columna dinámicamente
      for (let rowIndex = 0; rowIndex < llamar_excel_2.rows().count(); rowIndex++) {
          const rowValues = llamar_excel_2.rows().get(rowIndex);
          console.log(rowValues)

          const info = {
              "PROVEEDOR": llamar_excel_2.rows().get(rowIndex).get_value(2),
          };
              /*colElement.textContent = colValue;*/
          console.log(`DATA: ${JSON.stringify(info)}`)
          console.log(info)

          fetch('/ords/alere_qa/rest_ale_facturacion/insert', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(info)
          })
          .then(response => {
          if (response.ok) {
              return response.json();
          }
          throw new Error('Error al hacer la solicitud POST');
          })
          .then(data => {
          console.log(data);
          })
          .catch(error => {
          console.error(error);
});



          /*fetch(`https://10.0.1.32:8443/ords/alere_qa/rest_ale_facturacion/insert`, {
              method: 'POST',
              headers: {'Content-Type': 'application/json',
              body: JSON.stringify(info)
              }
          })
          .then(response => {
              if (response.ok) {
              return response.json();
              }
              throw new Error('Error al hacer la solicitud POST');
          })
          .then(data => {console.log(data);})
          .catch(error => {console.error(error);});*/
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
      console.log(rowValues)

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
/*-------------------------------------------------------------------------------------- */

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


  
INSERT INTO ALE_EXCEL_FACTURACION (MES,YEAR)
MES	NUMBER	Yes	-	-
YEAR	NUMBER(4,0)	Yes	-	-
FOLIO_PROYECTO	VARCHAR2(255)	Yes	-	-
CR_PROYECTO	VARCHAR2(255)	Yes	-	-
SI_LEGACY_PROY	VARCHAR2(255)	Yes	-	-
PROYECTO_ID	NUMBER	Yes	-	-
PROVEEDOR_ID	NUMBER	Yes	-	-
RECURSO_ID	NUMBER	Yes	-	-
OPERATIVO	NUMBER	Yes	-	-
PROYECTO	NUMBER	Yes	-	-
SERVICIO	NUMBER	Yes	-	-
FECHA_INICIO	DATE	Yes	-	-
FECHA_FIN	DATE	Yes	-	-
PORC_ASIG_PRO	NUMBER	Yes	-	-
PORC_ASIG_MES	NUMBER	Yes	-	-
CONTACTO_V_ID	NUMBER	Yes	-	-
PLATAFORMA_ID	NUMBER	Yes	-	-
AREA_ID	NUMBER	Yes	-	-
COMENTARIOS	CLOB	Yes	-	-
DESCRIPCION	CLOB	Yes	-	-
CREATED	DATE	Yes	-	-
CREATED_BY	NUMBER	Yes	-	-
UPDATED	DATE	Yes	-	-
UPDATED_BY	NUMBER	Yes	-	-
PUESTO_RECURSO	VARCHAR2(255)	Yes	-	-
CORREO_RECURSO	VARCHAR2(255)	Yes	-	-
CORREO_CONTACTO	VARCHAR2(4000)	Yes	-	-
SI_ORACLE_PROY

/*Insertar valores de una tabla a otra */
INSERT INTO tabla1 (columna1, columna2, columna3)
SELECT columna1, columna2, columna3
FROM tabla2
WHERE condicion;

    insertar(){
      const url = `https://10.0.1.32:8443/ords/alere_qa/rest_ale_facturacion/insert/${encodeURIComponent(JSON.stringify(this.data))}`;

      fetch(url, {
        method: 'POST',
        headers: {
'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Error al hacer la solicitud POST');
      })
      .then(data => {console.log(data);})
      .catch(error => {console.error(error);});
    }

    <style type="text/css">
 //th,td {white-space: nowrap;}
 #reporte_colaboradores{white-space: nowrap;}
</style>
