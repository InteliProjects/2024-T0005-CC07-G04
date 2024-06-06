package com.example.vivoMovel.dtos

import java.time.LocalDate
import java.util.*

// Define o DTO para representar os dados do plano de Vivo Móvel
@JvmRecord
data class VivoMovelDto(
    val saldoInternet: Float,
    val plano:String,
    val valorFatura: Float,
    val valorCredito: Float,
    val totalSaldoInternet : Float,
    val diaPagamento: String,
    val mesAno:String,
    val updatedAt : LocalDate,
    val userId : String
){
    // Métodos para obter os valores dos campos
    fun getSaldoInternet(): Float {
        return saldoInternet
    }
    fun getPlano(): String {
        return plano
    }
    fun getTotalSaldoInternet(): Float {
        return totalSaldoInternet
    }
    fun getValorCredito(): Float {
        return valorCredito
    }
    fun getValorFatura(): Float {
        return valorFatura
    }
    fun getDiaPagamento(): String {
        return diaPagamento
    }
    fun getMesAno(): String {
        return mesAno
    }
    
    // Obtém a data de atualização do plano
    fun getUpdatedAt(): LocalDate {
        return updatedAt
    }

    // Obtém o ID do usuário associado ao plano
    fun getUserId(): String {
        return userId
    }
}
