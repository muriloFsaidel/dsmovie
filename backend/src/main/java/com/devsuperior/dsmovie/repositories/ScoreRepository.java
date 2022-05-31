package com.devsuperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.devsuperior.dsmovie.entities.Score;
import com.devsuperior.dsmovie.entities.ScorePK;

@Repository                                           //ScorePK é a chave composta(2pk, movieId e userId)
public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

	
}
