package com.devsuperior.dsmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsmovie.DTO.MovieDTO;
import com.devsuperior.dsmovie.DTO.ScoreDTO;
import com.devsuperior.dsmovie.entities.Movie;
import com.devsuperior.dsmovie.entities.Score;
import com.devsuperior.dsmovie.entities.User;
import com.devsuperior.dsmovie.repositories.MovieRepository;
import com.devsuperior.dsmovie.repositories.ScoreRepository;
import com.devsuperior.dsmovie.repositories.UserRepository;

@Service
public class ScoreService {
	
	@Autowired
	private MovieRepository movieRepository;
	
	@Autowired
	private UserRepository  userRepository;
	
	@Autowired
	private ScoreRepository scoreRepository;
	
	@Transactional
	public MovieDTO saveScore(ScoreDTO scoreDTO) {
		
		//buscando  usuário por email
		User user = userRepository.findByEmail(scoreDTO.getEmail());
		
		//usuário não existe?
		if(user == null) {
			//cria um novo Usuário
			user = new User();
			//com o email passado na requisição
			user.setEmail(scoreDTO.getEmail());
			//inserindo novo usuário no banco e mantendo o objeto atualizado
			user = userRepository.saveAndFlush(user);
		}
		
		//buscando filme pelo id da requisição
		Movie movie = movieRepository.findById(scoreDTO.getMovieId()).get();
		
		//criando objeto score
		Score score = new Score();
		//Atribuindo as chave composta o movieId e o userId, e atribuindo o valor da avaliação do filme
		score.setMovie(movie);
		score.setUser(user);
		score.setValue(scoreDTO.getScore());
		
		//inserindo nova avaliação no banco e mantendo o objeto atualizado
		score = scoreRepository.saveAndFlush(score);
		
		double sum = 0.0;
		//para cada avaliação(s) dentro da lista de avaliações do filme
		for(Score s : movie.getScores()) {
			//acumula o valor total de avaliações
			sum = sum + s.getValue();
		}
		
		//média de avaliações: o valor total de avaliações + a quantidade de avaliações
		double average = sum / movie.getScores().size();
		
		//atualizando a média de avaliações
		movie.setScore(average);
		//atualizando a quantidade de avaliações
		movie.setCount(movie.getScores().size());
		//atualizando entidade movie no conjunto de entidades movies
		movie = movieRepository.save(movie);	
		
		return new MovieDTO(movie);
		
	}	
}
