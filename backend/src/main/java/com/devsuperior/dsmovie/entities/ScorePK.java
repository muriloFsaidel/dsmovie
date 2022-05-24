package com.devsuperior.dsmovie.entities;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

//Classe com os ids de filme e usuário, pois o jpa não aceita chave composta (ter dois atributos @Id)
@Embeddable
public class ScorePK implements Serializable{
	
	private static final long serialVersionUID = 1L;

	//Muitas scores para um Movie
	@ManyToOne
	//Atribuindo nome da coluna no db
	@JoinColumn(name = "movie_id")
	private Movie movie;
	
	//Muitas scores para um User
	@ManyToOne
	//Atribuindo nome da coluna no db
	@JoinColumn(name = "user_id")
	private User user;
	
	public ScorePK() {
		
	}
	
	public Movie getMovie() {
		return movie;
	}
	
	public void setMovie(Movie movie) {
		this.movie = movie;
	}
	
	public User getUser() {
		return user;
	}
	
	public void setUser(User user) {
		this.user = user;
	}
}
