package com.devsuperior.dsmovie.entities;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

//tabela associativa entre Movie e User, com a chave composta ScorePK

@Entity
@Table(name = "tb_score")
public class Score {
	
	//Chave Composta (2pk, idMovie e idUser)
	@EmbeddedId
	private ScorePK id = new ScorePK();
	private Double value;
	
	public Score() {		
	}	
	//associando filme a nota
	public void setMovie(Movie movie) {
		id.setMovie(movie);
	}
	//associando usuário a nota
	public void setUser(User user) {
		id.setUser(user);
	}

	public ScorePK getId() {
		return id;
	}

	public void setId(ScorePK id) {
		this.id = id;
	}

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}	
}
