package com.example.vivoMovel.models

import com.fasterxml.jackson.annotation.JsonFormat
import jakarta.persistence.*
import org.springframework.beans.factory.annotation.Autowired
import java.time.LocalDateTime
import java.util.Date
import java.util.UUID
import java.time.LocalDate

// Define a entidade JPA para representar um plano de Vivo Móvel
@Entity
@Table(name = "VIVO_MOVEL")
data class VivoMovelModel (
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    var id: UUID ? = null,
    var saldoInternet: Float ? = null,
    var plano:String ? = null,
    var totalSaldoInternet : Float ? = null,
    var valorFatura: Float ? = null,
    var valorCredito: Float ? = null,
    var diaPagamento: String ? = null,
    var mesAno:String ? = null,
    var createdAt: LocalDate ? = null,
    @JsonFormat(pattern = "yyyy-MM-dd")
    var updatedAt : LocalDate ? = null,
    var userId : String? = null
) {

    // Métodos para atualizar os campos da entidade
    fun setSaldoInternet(newSaldoInternet:Float) {
        saldoInternet = newSaldoInternet
    }
    fun setPlan(newPlano:String) {
        plano = newPlano
    }
    fun setTotalSaldoInternet(newTotalSaldoInternet:Float) {
        totalSaldoInternet = newTotalSaldoInternet
    }
    fun setValorCredito(newValorCredito:Float) {
        valorCredito = newValorCredito
    }
    fun setValorFatura(newValorFatura:Float) {
        valorFatura = newValorFatura
    }
    fun setDay(newDiaPagamento:String) {
        diaPagamento = newDiaPagamento
    }
    fun setMonthYear(newMesAno:String) {
        mesAno = newMesAno
    }
    fun setUpdated(newUpdatedAt: LocalDate) {
        updatedAt = newUpdatedAt
    }
    fun setUser(newUserId:String) {
        userId = newUserId
    }
}
