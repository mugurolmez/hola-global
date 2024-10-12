package com.holadev.HolaGlobal.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.Date;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class AddCustomerRequestDTO {
    @NotNull
    @NotBlank
    private String name;
    private String lastname;
    private LocalDate dateOfBirth;
    private String passportNumber;
    private String typeOfResidencePermit;
    private String phoneNumber;
    private String nationality;
    private LocalDate applicationDate=LocalDate.now();
    private String healthInsuranceNumber;
    private String state = "Beklemede";

}
