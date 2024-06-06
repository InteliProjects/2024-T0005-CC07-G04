package com.example.vivoFibra.repositories

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import com.example.vivoFibra.models.VivoFibraModel
import java.util.Optional

import java.util.UUID

@Repository
interface VivoFibraRepository : JpaRepository<VivoFibraModel,UUID> {
    fun findByUserId(userID:String): Optional<VivoFibraModel>
}