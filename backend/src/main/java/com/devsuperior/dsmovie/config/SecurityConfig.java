package com.devsuperior.dsmovie.config;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

/* em linhas gerais, irá permitir crossOrigin entre Heroku(JSpringBoot) e Netifly(react)*/

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Autowired
	private Environment env;
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		//se houver uma lista de tamanho fixo contendo o perfil de ambiente teste
		if(Arrays.asList(env.getActiveProfiles()).contains("test")) {
			//desabilitando o cabeçalho na resposta
			http.headers().frameOptions().disable();
		}
		//desabilitando proteção cors e csrf
		http.cors().and().csrf().disable();
		//inibindo sessão http
		http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		//de forma autorizada permite qualquer um fazer uma requisição 
		http.authorizeRequests().anyRequest().permitAll();
	}
	
	//objeto utilizado como dependência
	@Bean
	//em linhas gerais, substituindo as configurações padrões do cors,
	//para permitir requisições do tipo cross-origin via métodos GET,PUT,POST...
	CorsConfigurationSource corsConfigurationSource() {		
		CorsConfiguration configuration = new CorsConfiguration().applyPermitDefaultValues();
		configuration.setAllowedMethods(Arrays.asList("POST","GET","PUT","DELETE","OPTIONS"));
		final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**",configuration);
		return source;
	}

}
