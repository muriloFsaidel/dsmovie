package com.devsuperior.dsmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsmovie.DTO.MovieDTO;
import com.devsuperior.dsmovie.entities.Movie;
import com.devsuperior.dsmovie.repositories.MovieRepository;

//camada intermediária das transações de regras de negócio entre a camada de acesso a dados e a camada de controle
@Service
public class MovieService {
	
	@Autowired	
	private MovieRepository repository;
	
	//método transacional somente de leitura
	@Transactional(readOnly = true)
	public Page<MovieDTO> findAll(Pageable pageable){
		//armazenando todos os registros do db de forma paginada em result
		Page<Movie> result = repository.findAll(pageable);
		//para cada registro de result cria um novo objeto DTO em page 
		Page<MovieDTO> page = result.map(film -> new MovieDTO(film));
		//retornando objeto do tipo MovieDTO em formato de página com os registros do db
		return page;
	}

	@Transactional(readOnly = true)
	public MovieDTO findById(Long id) {
		//resgatando apenas um objeto do tipo Movie
		Movie result = repository.findById(id).get();
		MovieDTO dto = new MovieDTO(result);
		return dto;
		
	}
}
