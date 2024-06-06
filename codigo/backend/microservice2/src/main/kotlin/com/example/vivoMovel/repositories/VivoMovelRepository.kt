package com.example.vivoMovel.repositories

import com.example.vivoMovel.models.VivoMovelModel
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.util.Optional
import java.util.UUID

// Repositório para operações de banco de dados relacionadas aos planos de Vivo Móvel
@Repository
interface VivoMovelRepository : JpaRepository<VivoMovelModel,UUID> {
    
    // Método para encontrar um plano de Vivo Móvel pelo ID do usuário
    fun findByUserId (userId: String): Optional<VivoMovelModel>
}
