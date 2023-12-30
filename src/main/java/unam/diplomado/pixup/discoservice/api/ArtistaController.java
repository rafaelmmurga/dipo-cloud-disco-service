package unam.diplomado.pixup.discoservice.api;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import unam.diplomado.pixup.discoservice.domain.Artista;
import unam.diplomado.pixup.discoservice.repository.ArtistaRepository;
import unam.diplomado.pixup.discoservice.service.ArtistaService;

@RestController
@RequestMapping(path="api/artistas", produces="application/json")
@CrossOrigin(origins="*")
public class ArtistaController implements ArtistaApi{

	@Autowired
	private ArtistaRepository artistaRepository;
	@Autowired
	private ArtistaService artistaService;

	@Override
	public List<Artista> obtenerArtistas () {
		return artistaRepository.findAll();
	}

	@Override
	public Artista crearArtista(@RequestBody Artista artista) {
		return artistaRepository.save(artista);
	}
	
	@Override
	public Artista artistaPorId(@PathVariable String id) {
		Optional<Artista> artista = artistaRepository.findById(id);
		if(artista.isPresent()) {
			return artista.get();
		}
		return null;
 	}

	@Override
	public Artista actualizarArtista(
			@PathVariable("id") String id, @RequestBody Artista artista) {
		Artista artistaActualizado = artistaService.actualizarArtista(id, artista);
		if(artistaActualizado != null) {
			return artistaActualizado;
		}
		return null;
	}

	@Override
	public void eliminarArtista(@PathVariable("id") String id) {
		artistaRepository.deleteById(id);
	}
	
}
