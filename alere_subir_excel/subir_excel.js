function mostrarMensaje(mensaje) {
  var consoleLog = document.getElementById("console-log");
  consoleLog.innerHTML += mensaje + "<br>";
  
  // Desplázate automáticamente hacia abajo para mostrar los mensajes más recientes
  consoleLog.scrollTop = consoleLog.scrollHeight;
}

class metodo_post{
  static async insertar(llamar_excel_2) {
    console.log(`Cantidad de registros: ${llamar_excel_2.rows().count()}`);

    let stopLoop = false;
    for (let rowIndex = 0; rowIndex < llamar_excel_2.rows().count() && !stopLoop; rowIndex++) {
      await fetch(`/ords/alere_qa/rest_ale_facturacion/verificar_correo/${llamar_excel_2.rows().get(rowIndex).get_value(5)}`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          if (data['correo'] === 'Correo no encontrado') {
            console.log(`Línea ${rowIndex + 2}: el correo "${llamar_excel_2.rows().get(rowIndex).get_value(5)}" no se encuentra en el registro de colaboradores.`);
            stopLoop = true; // Establece la bandera para detener el bucle
          }
        })
        .catch(error => console.error(error));
    }

    let stopLoop_proyecto = false;
    for (let rowIndex = 0; rowIndex < llamar_excel_2.rows().count() && !stopLoop_proyecto; rowIndex++) {
      await fetch(`/ords/alere_qa/rest_ale_facturacion/verificar_proyecto/${llamar_excel_2.rows().get(rowIndex).get_value(10)}`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          if (data['nombre_proyecto'] === 'Proyecto no encontrado') {
            console.log(`Línea ${rowIndex + 2}: el proyecto "${llamar_excel_2.rows().get(rowIndex).get_value(10)}" no se encuentra en el registro de proyectos en facturacion.`);
            stopLoop_proyecto = true; // Establece la bandera para detener el bucle
          }
        })
        .catch(error => console.error(error));
    }

    let stopLoop_longitud_data = false;
    for (let rowIndex = 0; rowIndex < llamar_excel_2.rows().count() && !stopLoop_longitud_data; rowIndex++){
      var campo_coordinador=llamar_excel_2.rows().get(rowIndex).get_value(0);
      var campo_mes=llamar_excel_2.rows().get(rowIndex).get_value(1);
      var campo_correo_electronico=llamar_excel_2.rows().get(rowIndex).get_value(5);
      var campo_folio_proyecto=llamar_excel_2.rows().get(rowIndex).get_value(6);
      var campo_cr=llamar_excel_2.rows().get(rowIndex).get_value(7);
      var campo_si_legacy=llamar_excel_2.rows().get(rowIndex).get_value(8);
      var campo_si_oracle=llamar_excel_2.rows().get(rowIndex).get_value(9);
      var campo_nombre_proyecto=llamar_excel_2.rows().get(rowIndex).get_value(10);
      var campo_fecha_inicio_mes_facturar=llamar_excel_2.rows().get(rowIndex).get_value(11);
      var campo_fecha_fin_mes_facturar= llamar_excel_2.rows().get(rowIndex).get_value(12);
      var campo_fecha_inicio = llamar_excel_2.rows().get(rowIndex).get_value(13);
      var campo_fecha_fin=llamar_excel_2.rows().get(rowIndex).get_value(14);
      var campo_dias_del_mes=llamar_excel_2.rows().get(rowIndex).get_value(15);
      var campo_dias_de_asignacion=llamar_excel_2.rows().get(rowIndex).get_value(16);
      var campo_dias_festivos=llamar_excel_2.rows().get(rowIndex).get_value(17);
      var campo_dias_vacaciones=llamar_excel_2.rows().get(rowIndex).get_value(18);
      var campo_horas_totales_mes=llamar_excel_2.rows().get(rowIndex).get_value(19);
      var campo_horas_dia=llamar_excel_2.rows().get(rowIndex).get_value(20);
      var campo_horas_laboradas=llamar_excel_2.rows().get(rowIndex).get_value(21);
      var campo_porcentaje_asignacion=llamar_excel_2.rows().get(rowIndex).get_value(22);
      var campo_tipo_servicio=llamar_excel_2.rows().get(rowIndex).get_value(23);
      var campo_contacto_vobo=llamar_excel_2.rows().get(rowIndex).get_value(24);
      var campo_correo_solicitud_vobo=llamar_excel_2.rows().get(rowIndex).get_value(25);
    
    const longitudes_datos = [50,20,0,0,0,200,20,10,20,20,100,30,30,30,30,30,30,30,30,30,30,30,30,50,200,200];
        //0
        if (campo_coordinador !== null){
            if (campo_coordinador.length > longitudes_datos[0]){
            stopLoop_longitud_data = true;}
        };
        //1
        if (campo_mes !== null){
            if (campo_mes.length > longitudes_datos[1]){
            stopLoop_longitud_data = true;}
        };
        //5
        if (campo_correo_electronico !== null){
            if (campo_correo_electronico.length > longitudes_datos[5]){
            stopLoop_longitud_data = true;}
        };
        //6
        if (campo_folio_proyecto !== null){
            if (campo_folio_proyecto.length > longitudes_datos[6]){
            stopLoop_longitud_data = true;}
        };
        //7
        if (campo_cr !== null){
            if (campo_cr.length > longitudes_datos[7]){
            stopLoop_longitud_data = true;}
        };
        //8
        if (campo_si_legacy !== null){
            if (campo_si_legacy.length > longitudes_datos[8]){
            stopLoop_longitud_data = true;}
        };
        //9
        if (campo_si_oracle !== null){
            if (campo_si_oracle.length > longitudes_datos[9]){
            stopLoop_longitud_data = true;}
        };
        //10
        if (campo_nombre_proyecto !== null){
            if (campo_nombre_proyecto.length > longitudes_datos[10]){
            stopLoop_longitud_data = true;}
        };
        //11
        if (campo_fecha_inicio_mes_facturar !== null){
            if (campo_fecha_inicio_mes_facturar.length > longitudes_datos[11]){
            stopLoop_longitud_data = true;}
        };
        //12
        if (campo_fecha_fin_mes_facturar !== null){
            if (campo_fecha_fin_mes_facturar.length > longitudes_datos[12]){
            stopLoop_longitud_data = true;}
        };
        //13
        if (campo_fecha_inicio !== null){
            if (campo_fecha_inicio.length > longitudes_datos[13]){
            stopLoop_longitud_data = true;}
        };
        //14
        if (campo_fecha_fin !== null){
            if (campo_fecha_fin.length > longitudes_datos[14]){
            stopLoop_longitud_data = true;}
        };
        //15
        if (campo_dias_del_mes !== null){
            if (campo_dias_del_mes.length > longitudes_datos[15]){
            stopLoop_longitud_data = true;}
        };
        //16
        if (campo_dias_de_asignacion !== null){
            if (campo_dias_de_asignacion.length > longitudes_datos[16]){
            stopLoop_longitud_data = true;}
        };
        //17
        if (campo_dias_festivos !== null){
            if (campo_dias_festivos.length > longitudes_datos[17]){
            stopLoop_longitud_data = true;}
        };
        //18
        if (campo_dias_vacaciones !== null){
            if (campo_dias_vacaciones.length > longitudes_datos[18]){
            stopLoop_longitud_data = true;}
        };
        //19
        if (campo_horas_totales_mes !== null){
            if (campo_horas_totales_mes.length > longitudes_datos[19]){
            stopLoop_longitud_data = true;}
        };
        //20
        if (campo_horas_dia !== null){
            if (campo_horas_dia.length > longitudes_datos[20]){
            stopLoop_longitud_data = true;}
        };
        //21
        if (campo_horas_laboradas !== null){
            if (campo_horas_laboradas.length > longitudes_datos[21]){
            stopLoop_longitud_data = true;}
        };
        //22
        if (campo_porcentaje_asignacion !== null){
            if (campo_porcentaje_asignacion.length > longitudes_datos[22]){
            stopLoop_longitud_data = true;}
        };
        //23
        if (campo_tipo_servicio !== null){
            if (campo_tipo_servicio.length > longitudes_datos[23]){
            stopLoop_longitud_data = true;}
        };
        //24
        if (campo_contacto_vobo !== null){
            console.log(`Linea ${rowIndex+2}: ${campo_contacto_vobo}`);
            if (campo_contacto_vobo.length > longitudes_datos[24]){
            stopLoop_longitud_data = true;}
        };
        //25
        if (campo_correo_solicitud_vobo !== null){
            if (campo_correo_solicitud_vobo.length > longitudes_datos[25]){
            stopLoop_longitud_data = true;}
        };
    }

    if (stopLoop || stopLoop_proyecto || stopLoop_longitud_data){
        console.log(`El archivo a detenido la carga, no se subira ningun dato a menos que todos los campos esten corregidos`);
        Swal.fire({
                text:`El archivo excel contiene datos no encontrados en la base de datos, no se subira ningun dato a menos que todos los campos esten corregidos. Por favor verifica los datos con la opcion 'Validar excel'.`,
                icon: 'error',
                confirmButtonColor: '#3a3632',
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                stopKeydownPropagation: false         
            }).then((result) => {
            if (result.isConfirmed) {
                location.reload(); // Actualizar la página
            }
});
    } 
    else{
      for (let rowIndex = 0; rowIndex < llamar_excel_2.rows().count(); rowIndex++) {
        const info = {
          "FILA": rowIndex + 1,
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

        await fetch('/ords/alere_qa/rest_ale_facturacion/insert', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(info)
        })
        .then(response => {
          console.log(`DATA: ${JSON.stringify(info)}`);
          if (response.ok) {
            return response.json();
          }
          throw new Error('Error al hacer la solicitud POST');
        })
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error(`Error en la línea: ${rowIndex} - Descripción: ${error}`);
        });
      }
    }
  }
}

class validar_excel{
    static async validar(llamar_excel_2){
    console.log(`Cantidad de registros: ${llamar_excel_2.rows().count()}`);

    let stopLoop = false;
    for (let rowIndex = 0; rowIndex < llamar_excel_2.rows().count(); rowIndex++) {
      await fetch(`/ords/alere_qa/rest_ale_facturacion/verificar_correo/${llamar_excel_2.rows().get(rowIndex).get_value(5)}`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          if (data['correo'] === 'Correo no encontrado') {
            console.log(`Línea ${rowIndex + 2}: el correo "${llamar_excel_2.rows().get(rowIndex).get_value(5)}" no se encuentra en el registro de colaboradores.`);
            mostrarMensaje(`Línea ${rowIndex + 2}: el correo "${llamar_excel_2.rows().get(rowIndex).get_value(5)}" no se encuentra en el registro de colaboradores.`);
            stopLoop = true; // Establece la bandera para detener el bucle
          }
        })
        .catch(error => console.error(error));
    }

    let stopLoop_proyecto = false;
    for (let rowIndex = 0; rowIndex < llamar_excel_2.rows().count(); rowIndex++) {
      await fetch(`/ords/alere_qa/rest_ale_facturacion/verificar_proyecto/${llamar_excel_2.rows().get(rowIndex).get_value(10)}`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          if (data['nombre_proyecto'] === 'Proyecto no encontrado') {
            console.log(`Línea ${rowIndex + 2}: ${llamar_excel_2.rows().get(rowIndex).get_value(10)} no se encuentra en el registro de proyectos en facturacion.`);
            mostrarMensaje(`Línea ${rowIndex + 2}: el proyecto "${llamar_excel_2.rows().get(rowIndex).get_value(10)}" no se encuentra en el registro de proyectos en facturacion.`);
            stopLoop_proyecto = true; // Establece la bandera para detener el bucle
          }
        })
        .catch(error => console.error(error));
    }
    let stopLoop_longitud_data = false;
    for (let rowIndex = 0; rowIndex < llamar_excel_2.rows().count(); rowIndex++){
      var campo_coordinador=llamar_excel_2.rows().get(rowIndex).get_value(0);
      var campo_mes=llamar_excel_2.rows().get(rowIndex).get_value(1);
      var campo_correo_electronico=llamar_excel_2.rows().get(rowIndex).get_value(5);
      var campo_folio_proyecto=llamar_excel_2.rows().get(rowIndex).get_value(6);
      var campo_cr=llamar_excel_2.rows().get(rowIndex).get_value(7);
      var campo_si_legacy=llamar_excel_2.rows().get(rowIndex).get_value(8);
      var campo_si_oracle=llamar_excel_2.rows().get(rowIndex).get_value(9);
      var campo_nombre_proyecto=llamar_excel_2.rows().get(rowIndex).get_value(10);
      var campo_fecha_inicio_mes_facturar=llamar_excel_2.rows().get(rowIndex).get_value(11);
      var campo_fecha_fin_mes_facturar= llamar_excel_2.rows().get(rowIndex).get_value(12);
      var campo_fecha_inicio = llamar_excel_2.rows().get(rowIndex).get_value(13);
      var campo_fecha_fin=llamar_excel_2.rows().get(rowIndex).get_value(14);
      var campo_dias_del_mes=llamar_excel_2.rows().get(rowIndex).get_value(15);
      var campo_dias_de_asignacion=llamar_excel_2.rows().get(rowIndex).get_value(16);
      var campo_dias_festivos=llamar_excel_2.rows().get(rowIndex).get_value(17);
      var campo_dias_vacaciones=llamar_excel_2.rows().get(rowIndex).get_value(18);
      var campo_horas_totales_mes=llamar_excel_2.rows().get(rowIndex).get_value(19);
      var campo_horas_dia=llamar_excel_2.rows().get(rowIndex).get_value(20);
      var campo_horas_laboradas=llamar_excel_2.rows().get(rowIndex).get_value(21);
      var campo_porcentaje_asignacion=llamar_excel_2.rows().get(rowIndex).get_value(22);
      var campo_tipo_servicio=llamar_excel_2.rows().get(rowIndex).get_value(23);
      var campo_contacto_vobo=llamar_excel_2.rows().get(rowIndex).get_value(24);
      var campo_correo_solicitud_vobo=llamar_excel_2.rows().get(rowIndex).get_value(25);
    
    const longitudes_datos = [50,20,0,0,0,200,20,10,20,20,100,30,30,30,30,30,30,30,30,30,30,30,30,50,200,200];
        
        //0
        if (campo_coordinador !== null){
            if (campo_coordinador.length > longitudes_datos[0]){
            mostrarMensaje(`Línea ${rowIndex+2}: valor de coordinador "${campo_coordinador}" demasiado largo(${longitudes_datos[0]}).`)
            stopLoop_longitud_data = true;}
        };
        //1
        if (campo_mes !== null){
            if (campo_mes.length > longitudes_datos[1]){
            stopLoop_longitud_data = true;}
        };
        //5
        if (campo_correo_electronico !== null){
            if (campo_correo_electronico.length > longitudes_datos[5]){
            stopLoop_longitud_data = true;}
        };
        //6
        if (campo_folio_proyecto !== null){
            if (campo_folio_proyecto.length > longitudes_datos[6]){
            stopLoop_longitud_data = true;}
        };
        //7
        if (campo_cr !== null){
            if (campo_cr.length > longitudes_datos[7]){
            stopLoop_longitud_data = true;}
        };
        //8
        if (campo_si_legacy !== null){
            if (campo_si_legacy.length > longitudes_datos[8]){
            stopLoop_longitud_data = true;}
        };
        //9
        if (campo_si_oracle !== null){
            if (campo_si_oracle.length > longitudes_datos[9]){
            stopLoop_longitud_data = true;}
        };
        //10
        if (campo_nombre_proyecto !== null){
            if (campo_nombre_proyecto.length > longitudes_datos[10]){
            stopLoop_longitud_data = true;}
        };
        //11
        if (campo_fecha_inicio_mes_facturar !== null){
            if (campo_fecha_inicio_mes_facturar.length > longitudes_datos[11]){
            stopLoop_longitud_data = true;}
        };
        //12
        if (campo_fecha_fin_mes_facturar !== null){
            if (campo_fecha_fin_mes_facturar.length > longitudes_datos[12]){
            stopLoop_longitud_data = true;}
        };
        //13
        if (campo_fecha_inicio !== null){
            if (campo_fecha_inicio.length > longitudes_datos[13]){
            stopLoop_longitud_data = true;}
        };
        //14
        if (campo_fecha_fin !== null){
            if (campo_fecha_fin.length > longitudes_datos[14]){
            stopLoop_longitud_data = true;}
        };
        //15
        if (campo_dias_del_mes !== null){
            if (campo_dias_del_mes.length > longitudes_datos[15]){
            stopLoop_longitud_data = true;}
        };
        //16
        if (campo_dias_de_asignacion !== null){
            if (campo_dias_de_asignacion.length > longitudes_datos[16]){
            stopLoop_longitud_data = true;}
        };
        //17
        if (campo_dias_festivos !== null){
            if (campo_dias_festivos.length > longitudes_datos[17]){
            stopLoop_longitud_data = true;}
        };
        //18
        if (campo_dias_vacaciones !== null){
            if (campo_dias_vacaciones.length > longitudes_datos[18]){
            stopLoop_longitud_data = true;}
        };
        //19
        if (campo_horas_totales_mes !== null){
            if (campo_horas_totales_mes.length > longitudes_datos[19]){
            stopLoop_longitud_data = true;}
        };
        //20
        if (campo_horas_dia !== null){
            if (campo_horas_dia.length > longitudes_datos[20]){
            stopLoop_longitud_data = true;}
        };
        //21
        if (campo_horas_laboradas !== null){
            if (campo_horas_laboradas.length > longitudes_datos[21]){
            stopLoop_longitud_data = true;}
        };
        //22
        if (campo_porcentaje_asignacion !== null){
            if (campo_porcentaje_asignacion.length > longitudes_datos[22]){
            stopLoop_longitud_data = true;}
        };
        //23
        if (campo_tipo_servicio !== null){
            if (campo_tipo_servicio.length > longitudes_datos[23]){
            stopLoop_longitud_data = true;}
        };
        //24
        if (campo_contacto_vobo !== null){
            if (campo_contacto_vobo.length > longitudes_datos[24]){
            stopLoop_longitud_data = true;}
        };
        //25
        if (campo_correo_solicitud_vobo !== null){
            if (campo_correo_solicitud_vobo.length > longitudes_datos[25]){
            stopLoop_longitud_data = true;}
        };
    }

    if (stopLoop || stopLoop_proyecto || stopLoop_longitud_data){
        Swal.fire({
                text:`El archivo tiene datos no permitidos.`,
                icon: 'error',
                confirmButtonColor: '#3a3632',
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                stopKeydownPropagation: false         
            })
    }
    else{
        Swal.fire({
                text:`El archivo no tiene errores.`,
                icon: 'success',
                confirmButtonColor: '#3a3632',
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                stopKeydownPropagation: false         
            })
    }
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

function validarEncabezado(encabezado) {
  const valoresValidos = ['COORDINADOR', 'MES', 'PROVEEDOR','NOMBRE DE RECURSO','NOMBRE DEL RECURSO',
  'CORREO ELECTRONICO DEL RECURSO','FOLIO DE PROYECTO','CR','SI LEGACY','SI ORACLE',
  'NOMBRE DE PROYECTO','FECHA INICIO DEL MES A FACTURAR','FECHA FIN DEL MES A FACTURAR',
  'FECHA INICIO','FECHA FIN','DIA DEL MES','DIAS DE ASIGNACION','DIAS FESTIVOS',
  'DIAS DE VACACIONES','DIAS DE VACACIONES','HORAS TOTALES DEL MES','HORAS POR DIA','HORAS LABORALES',
  'PORCENTAJE DE ASIGNACION','TIPO DE SERVICIO','CONTACTO VOBO','CORREO SOLICITUD VOBO'];
  const ordenValido = valoresValidos.slice();

  for (let i = 0; i < encabezado.length; i++) {
    const title = encabezado[i].toUpperCase();
    const valorEsperado = ordenValido[i];

    if (title !== valorEsperado) {
      return false; // Título incorrecto o desordenado
    }
  }

  return true; // Todos los títulos están en el orden correcto y son válidos
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
  
const inputExcel = document.getElementById('file-cargar');
inputExcel.addEventListener('change', async function(){
    const contenido = await readXlsxFile(inputExcel.files[0]);
    
    const llamar_excel = new Excel(contenido);
    /*console.log(llamar_excel.rows().get(2));*/
    console.log(ExcelPrinter.print("tabla_excel", llamar_excel));
    console.log(metodo_post.insertar(llamar_excel));
    inputExcel.value = "";
})

const inputValidar = document.getElementById('file-validar');
inputValidar.addEventListener('change', async function(){
    const contenido_validar = await readXlsxFile(inputValidar.files[0]);
    var setear_console = document.getElementById("console-log");
    setear_console.innerHTML = '';
    
    const llamar_excel = new Excel(contenido_validar);
    console.log(validar_excel.validar(llamar_excel));
    inputValidar.value = "";
})