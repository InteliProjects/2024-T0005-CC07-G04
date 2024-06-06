package com.example.vivoFibra.controllers

import com.example.vivoFibra.dtos.VivoFibraDto
import com.example.vivoFibra.models.VivoFibraModel
import com.example.vivoFibra.repositories.VivoFibraRepository
import jakarta.validation.Valid
import org.apache.coyote.Response
import org.springframework.beans.BeanUtils
import org.springframework.http.HttpStatus
import org.springframework.http.RequestEntity
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController
import java.time.LocalDate
import java.util.Date
import java.util.Optional
import java.util.UUID
import javax.swing.text.html.Option


@RestController
@CrossOrigin
data class VivoFibraController(
        val vivoFibraRepository: VivoFibraRepository
) {

    @PostMapping("/vivoFibra")
    fun addFibra (@RequestBody @Valid planDto: VivoFibraDto) : ResponseEntity<VivoFibraModel>? {

        val plan: VivoFibraModel = VivoFibraModel(
                saldoInternet = planDto.saldoInternet,
                plano = planDto.plano,
                totalSaldoInternet = planDto.totalSaldoInternet,
                valorFatura = planDto.valorFatura,
                mesAno = planDto.mesAno,
                createdAt = LocalDate.now(),
                updatedAt = planDto.updatedAt,
                userId = planDto.userId
        )

        val savedAtDb = vivoFibraRepository.save(plan)

        return ResponseEntity.status(HttpStatus.OK).body(savedAtDb)

    }

    @GetMapping("/vivoFibra")
    fun getFibra() : ResponseEntity<Any>? {
        val allPlans : List<VivoFibraModel> = vivoFibraRepository.findAll()

        if (allPlans.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Not found all plans")
        }

        return ResponseEntity.status(HttpStatus.OK).body(allPlans)
    }

    @GetMapping("/vivoFibra/{id}")
    fun getFibraById(@PathVariable(value = "id") id: String) : ResponseEntity<Any>? {

        val plan : Optional<VivoFibraModel> = vivoFibraRepository.findByUserId(id)

        if (plan.isEmpty){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Not found plan")

        }
        return ResponseEntity.status(HttpStatus.OK).body(plan.get())

    }

    @PutMapping("/vivoFibra/{id}")
    fun attFibra(@PathVariable(value = "id") id: String, @RequestBody @Valid planDto: VivoFibraDto) : ResponseEntity<Any>? {
        val plan : Optional<VivoFibraModel> = vivoFibraRepository.findByUserId(id)
        if (plan.isEmpty) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Not found plan")
        }

        val foundPlan = plan.get()

        foundPlan.setSaldoInternet(planDto.getSaldoInternet())
        foundPlan.setPlan(planDto.getPlano())
        foundPlan.setTotalSaldoInternet(planDto.getTotalSaldoInternet())
        foundPlan.setValorFatura(planDto.getValorFatura())
        foundPlan.setMonthYear(planDto.getMesAno())
        foundPlan.setUpdated(planDto.getUpdatedAt())
        foundPlan.setUser(planDto.getUserId())

        return ResponseEntity.status(HttpStatus.OK).body(vivoFibraRepository.save(foundPlan))

    }

    @DeleteMapping("/vivoFibra/{id}")
    fun deleteFibra(@PathVariable(value = "id") id: String) : ResponseEntity<Any>? {
        val plan : Optional<VivoFibraModel> = vivoFibraRepository.findByUserId(id)

        if (plan.isEmpty) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Not found plan")
        }
        vivoFibraRepository.delete(plan.get())

        return ResponseEntity.status(HttpStatus.OK).body("Plan deleted Successfully")

    }

}