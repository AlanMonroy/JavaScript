/*CODIGO PARA REST*/
/*GET*/
fetch('/ords/alere_qa/rest_afectacion/ale_info')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));

/*POST*/
const url = 'https://your-oracle-apex-url/ords/your-rest-endpoint';
const data = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 30
};

const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
};

fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));



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
