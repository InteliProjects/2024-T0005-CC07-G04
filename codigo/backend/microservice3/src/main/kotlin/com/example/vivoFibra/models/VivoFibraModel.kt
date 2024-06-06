package com.example.vivoFibra.models

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import java.util.UUID;
import jakarta.persistence.*
import java.time.LocalDate
import com.fasterxml.jackson.annotation.JsonFormat


@Entity
@Table(name = "VIVO_FIBRA")
data class VivoFibraModel (
        @Id
        @GeneratedValue(strategy= GenerationType.AUTO)
        var id : UUID?= null,
        var saldoInternet : Float?,
        var totalSaldoInternet : Float?,
        var valorFatura : Float?,
        var plano : String?,
        var mesAno : String?,
        var createdAt : LocalDate?,
        @JsonFormat(pattern ="yyyy-MM-dd")
        var updatedAt : LocalDate?,
        var userId : String?,
){
        fun setSaldoInternet(newSaldoInternet:Float) {
                saldoInternet = newSaldoInternet
        }
        fun setPlan(newPlano:String) {
                plano = newPlano
        }

        fun setValorFatura(newValorFatura:Float) {
                valorFatura = newValorFatura
        }

        fun setTotalSaldoInternet(newTotalSaldoInternet:Float) {
                totalSaldoInternet = newTotalSaldoInternet
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
