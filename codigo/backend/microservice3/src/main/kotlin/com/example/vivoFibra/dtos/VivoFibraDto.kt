package com.example.vivoFibra.dtos

import java.time.LocalDate
import java.time.LocalDateTime
import java.util.*


@JvmRecord
data class VivoFibraDto(
        val saldoInternet : Float,
        val totalSaldoInternet : Float,
        val valorFatura: Float,
        val plano : String,
        val mesAno : String,
        val updatedAt : LocalDate,
        val userId : String
){
        fun getSaldoInternet(): Float {
                return saldoInternet
        }
        fun getPlano(): String {
                return plano
        }
        fun getTotalSaldoInternet(): Float {
                return totalSaldoInternet
        }

        fun getValorFatura(): Float {
                return valorFatura
        }
        
        fun getMesAno(): String {
                return mesAno
        }


        fun getUpdatedAt(): LocalDate {
                return updatedAt

        }


        fun getUserId(): String {
                return userId

        }
}
