exports.handler = async (event) => {
    // TODO implement
    var response='null';
    switch(event.httpMethod){
        case "GET":
            // console.log("llegue aquí")
            response = {
            statusCode: 201,
            body: JSON.stringify(tasks),
            };
            break;
        case "POST":
            tasks.push(event.body);
            
        default:
            response = {
            statusCode: 201,
            body: JSON.stringify('lo siento no se encontro la peticion GET'),
            };
    }
   
    return response;
};
const tasks= [
  {
    "id":"0",
    "descripcion": "buenas tarde entre",
    "responsable": {
        "name": "Juan Romero",
        "email": "juan.romero@mail.com"
    },
    "estado": "listo",
    "fecha": new Date(2021,17,3).toString()
  },{
    "id":"1",
    "descripcion": "buenas 2.0",
    "responsable": {
        "name": "Juan Romero",
        "email": "juan.romero@mail.com"
    },
    "estado": "listo",
    "fecha": new Date(2021,17,3).toString()
  }
]