package com.devsuperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.devsuperior.dsmovie.entities.Movie;

//camada de acesso aos dados do banco de acordo com o conjunto de entidades
@Repository
public interface MovieRepository extends JpaRepository<Movie, Long>{
}
