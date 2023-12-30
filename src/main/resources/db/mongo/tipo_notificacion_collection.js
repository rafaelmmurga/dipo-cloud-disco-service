db.createCollection('tiposNotificacion', {
  autoIndexId: true,
  validator: {
    $jsonSchema: {
	  required: ['descripcion', 'rutaPlantilla'],
      properties: {
        descripcion: {
          type: 'string',
          description: 'descripcion tipoNotificacion requerida'
        },
        rutaPlantilla: {
          type: 'string',
          description: 'plantilla tipoNotificacion requerida'
        }
      }
    }
  }
});

db.tiposNotificacion.createIndex( { descripcion: 1 }, { unique: true } );

db.tiposNotificacion.insertMany( [
   { descripcion: "ALTA_USUARIO", rutaPlantilla: "plantilla_email_alta_usuario.template" },
   { descripcion: "CREAR_ORDEN", rutaPlantilla: "plantilla_email_orden.template" },
   { descripcion: "GENERAR_ENVIO", rutaPlantilla: "plantilla_email_envio.template" }
]);
