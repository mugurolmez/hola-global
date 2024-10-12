package com.holadev.HolaGlobal.entity;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDate;


@Data
@Entity
@Table(name = "customers")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String name;
    @NotBlank
    private String lastname;
    @NotNull
    private LocalDate dateOfBirth;
    @NotBlank
    private String passportNumber;
    @NotBlank
    private String typeOfResidencePermit;
    @NotBlank
    private String phoneNumber;
    @NotBlank
    private String nationality;
    private LocalDate applicationDate;
    private String healthInsuranceNumber;
    @NotBlank
    private String state;


}
