
// insert estados
db.estados.insertMany( [
   	{ 
	   _id: "64e4e765c2150a06113600a2",
	   nombre: "CIUDAD DE MÉXICO" 
	}
]);

// insert municipios
db.municipios.insertMany( [
   	{ 
	   	_id: "64e4edeec2150a06113600a8",
	   	nombre: "Miguel Hidalgo", 
	   	estado: DBRef("estados", ObjectId("64e4e765c2150a06113600a2"))
	},
	{ 
	   	_id: "64e4edeec2150a06113600a9",
	   	nombre: "Cuauhtémoc", 
	   	estado: DBRef("estados", ObjectId("64e4e765c2150a06113600a2"))
	}
]);

// insert colonias
db.colonias.insertMany( [
   	{ 
	   	nombre: "Santa María la Ribera", 
	   	cp: "06400",
	   	municipio: DBRef("municipios", ObjectId("64e4edeec2150a06113600a9"))
	},
	{ 
	   	nombre: "San Rafael", 
	   	cp: "06400",
	   	municipio: DBRef("municipios", ObjectId("64e4edeec2150a06113600a9"))
	},
	{ 
	   	nombre: "Guerrero", 
	   	cp: "06300",
	   	municipio: DBRef("municipios", ObjectId("64e4edeec2150a06113600a9"))
	},
	{ 
	   	nombre: "Anáhuac", 
	   	cp: "11320",
	   	municipio: DBRef("municipios", ObjectId("64e4edeec2150a06113600a8"))
	},
	{ 
	   	nombre: "Lomas de Chapultepec I Sección", 
	   	cp: "11000",
	   	municipio: DBRef("municipios", ObjectId("64e4edeec2150a06113600a8"))
	},
	{ 
	   	nombre: "Lomas de Chapultepec II Sección", 
	   	cp: "11000",
	   	municipio: DBRef("municipios", ObjectId("64e4edeec2150a06113600a8"))
	},
	{ 
	   	nombre: "Lomas de Chapultepec III Sección", 
	   	cp: "11000",
	   	municipio: DBRef("municipios", ObjectId("64e4edeec2150a06113600a8"))
	}
]);
