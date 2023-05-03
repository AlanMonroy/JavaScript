/*Codigo javascript
JSON1: Metodo POST
JSON 2: Cerrar el Modal Dialog
JSON 3: REDIRECCIONAR A OTRA PAGINA
*/

//JSON1: Metodo POST
const info = {
    "PROVEEDOR": llamar_excel_2.rows().get(rowIndex).get_value(2),
};

fetch('/ords/alere_qa/rest_ale_facturacion/insert', {
method: 'POST',
headers: {
    'Content-Type': 'application/json'
},
body: JSON.stringify(info)})
.then(response => {
if (response.ok) {return response.json();}
throw new Error('Error al hacer la solicitud POST');})
.then(data => {console.log(data);})
.catch(error => {console.error(error);});

//JSON 2: Cerrar el Modal Dialog
apex.navigation.dialog.close(true)

//JSON 3: REDIRECCIONAR A OTRA PAGINA
apex.navigation.redirect("f?p=&APP_ID.:67:&SESSION.", "_self");


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
            if (response.ok) {return response.json();}
            throw new Error('Error al hacer la solicitud POST');})
            .then(data => {console.log(data);})
            .catch(error => {console.error(error);});
        }
    }
}
console.log(metodo_post.insertar(llamar_excel));

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
            body: JSON.stringify(info)})
            .then(response => {
            if (response.ok) {return response.json();}
            throw new Error('Error al hacer la solicitud POST');})
            .then(data => {console.log(data);})
            .catch(error => {console.error(error);});
        }
    }
}