db.createCollection('tiposDomicilio', {
  autoIndexId: true,
  validator: {
    $jsonSchema: {
	  required: ['descripcion'],
      properties: {
        descripcion: {
          type: 'string',
          description: 'descripcion tipoDomicilio requerido'
        }
      }
    }
  }
});

db.tiposDomicilio.createIndex( { descripcion: 1 }, { unique: true } );

db.tiposDomicilio.insertMany( [
   { descripcion: "Entrega" },
   { descripcion: "Facturacion" }
]);
