db.createCollection('estados', {
  autoIndexId: true,
  validator: {
    $jsonSchema: {
	  required: ['nombre'],
      properties: {
        nombre: {
          type: 'string',
          description: 'nombre del estado requerido'
        }
      }
    }
  }
});

db.estados.createIndex( { nombre: 1 }, { unique: true } );
