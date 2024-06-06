package com.example.vivoMovel

import org.hibernate.dialect.Database
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

// Anotação indicando que esta é a classe principal da aplicação Spring Boot
@SpringBootApplication
class VivoMovelApplication

// Função principal que inicia a aplicação Spring Boot
fun main(args: Array<String>) {
    // Executa a aplicação Spring Boot
	runApplication<VivoMovelApplication>(*args)
}
