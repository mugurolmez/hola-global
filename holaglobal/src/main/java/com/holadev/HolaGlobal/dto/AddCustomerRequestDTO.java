package com.holadev.HolaGlobal.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDate;

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
