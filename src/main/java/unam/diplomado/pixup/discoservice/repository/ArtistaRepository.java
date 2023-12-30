package unam.diplomado.pixup.discoservice.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import unam.diplomado.pixup.discoservice.domain.Artista;

@Repository
public interface ArtistaRepository 
	extends MongoRepository<Artista, String>{

}
