
const { io } = require('../index');


// Mensajes de sockets
io.on('connection', client => {
    
    console.log('Cliente conectado');

    client.on('disconnect', () => { 
        console.log('Cliente desconectado');
     });


     client.on('mensaje', ( payload ) =>{
        console.log('Mensaje recibido!!! ', payload);

        io.emit( 'mensaje', {admin: 'Nuevo mensaje de:', nombre: payload});

     });



  });
