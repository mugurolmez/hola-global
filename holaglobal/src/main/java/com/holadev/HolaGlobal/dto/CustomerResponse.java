package com.holadev.HolaGlobal.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.time.LocalDate;
import java.util.Date;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class CustomerResponse {
    private Long id;
    private String name;
    private String lastname;


    private LocalDate dateOfBirth;

    private String passportNumber;
    private String typeOfResidencePermit;
    private String phoneNumber;
    private String nationality;
    private LocalDate applicationDate;

    private String healthInsuranceNumber;
    private String state;
}
