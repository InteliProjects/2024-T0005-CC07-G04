package com.example.vivoMovel.controllers

import com.example.vivoMovel.dtos.VivoMovelDto
import com.example.vivoMovel.models.VivoMovelModel
import com.example.vivoMovel.repositories.VivoMovelRepository
import jakarta.validation.Valid
import org.springframework.http.HttpStatus
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
import java.util.Optional

// Define o controlador REST para a entidade VivoMovel
@RestController
@CrossOrigin
data class VivoMovelController(
    val vivoMovelRepository: VivoMovelRepository
) {

    // Adiciona um plano de Vivo Móvel
    @PostMapping("/vivoMovel")
    fun addMovel (@RequestBody @Valid planDto: VivoMovelDto) : ResponseEntity<VivoMovelModel>? {

        // Cria uma instância de VivoMovelModel a partir do DTO recebido
        val plan: VivoMovelModel = VivoMovelModel(
            saldoInternet = planDto.saldoInternet,
            plano = planDto.plano,
            totalSaldoInternet = planDto.totalSaldoInternet,
            valorCredito = planDto.valorCredito,
            valorFatura = planDto.valorFatura,
            diaPagamento = planDto.diaPagamento,
            mesAno = planDto.mesAno,
            createdAt = LocalDate.now(),
            updatedAt = planDto.updatedAt,
            userId = planDto.userId
        )

        // Salva o plano no banco de dados e retorna a resposta HTTP
        val savedAtDb = vivoMovelRepository.save(plan)
        return ResponseEntity.status(HttpStatus.OK).body(savedAtDb)
    }

    // Obtém todos os planos de Vivo Móvel
    @GetMapping("/vivoMovel")
    fun getMovel() : ResponseEntity<Any>? {
        val allPlans : List<VivoMovelModel> = vivoMovelRepository.findAll()

        // Verifica se há planos disponíveis e retorna a resposta HTTP apropriada
        if (allPlans.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Not found all plans")
        }
        return ResponseEntity.status(HttpStatus.OK).body(allPlans)
    }

    // Obtém um plano de Vivo Móvel pelo ID do usuário
    @GetMapping("/vivoMovel/{id}")
    fun getMovelById(@PathVariable(value = "id") id: String) : ResponseEntity<Any>? {

        val plan : Optional<VivoMovelModel> = vivoMovelRepository.findByUserId(id)

        // Verifica se o plano foi encontrado e retorna a resposta HTTP apropriada
        if (plan.isEmpty){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Not found plan")
        }
        return ResponseEntity.status(HttpStatus.OK).body(plan.get())
    }

    // Atualiza um plano de Vivo Móvel pelo ID do usuário
    @PutMapping("/vivoMovel/{id}")
    fun attMovel(@PathVariable(value = "id") id: String, @RequestBody @Valid planDto: VivoMovelDto) : ResponseEntity<Any>? {
        val plan : Optional<VivoMovelModel> = vivoMovelRepository.findByUserId(id)

        // Verifica se o plano foi encontrado e retorna a resposta HTTP apropriada
        if (plan.isEmpty) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Not found plan")
        }

        // Atualiza os campos do plano e retorna a resposta HTTP
        val foundPlan = plan.get()
        foundPlan.setSaldoInternet(planDto.getSaldoInternet())
        foundPlan.setPlan(planDto.getPlano())
        foundPlan.setTotalSaldoInternet(planDto.getTotalSaldoInternet())
        foundPlan.setValorCredito(planDto.getValorCredito())
        foundPlan.setValorFatura(planDto.getValorFatura())
        foundPlan.setDay(planDto.getDiaPagamento())
        foundPlan.setMonthYear(planDto.getMesAno())
        foundPlan.setUpdated(planDto.getUpdatedAt())
        foundPlan.setUser(planDto.getUserId())

        return ResponseEntity.status(HttpStatus.OK).body(vivoMovelRepository.save(foundPlan))
    }

    // Exclui um plano de Vivo Móvel pelo ID do usuário
    @DeleteMapping("/vivoMovel/{id}")
    fun deleteMovel(@PathVariable(value = "id") id: String) : ResponseEntity<Any>? {
        val plan : Optional<VivoMovelModel> = vivoMovelRepository.findByUserId(id)

        // Verifica se o plano foi encontrado e retorna a resposta HTTP apropriada
        if (plan.isEmpty) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Not found plan")
        }

        // Exclui o plano do banco de dados e retorna a resposta HTTP
        vivoMovelRepository.delete(plan.get())
        return ResponseEntity.status(HttpStatus.OK).body("Plan deleted Successfully")
    }
}
