package com.holadev.HolaGlobal.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class LoginRequest {
    @NotBlank(message = "Email Gerekli")
    private String email;
    @NotBlank(message = "Parola Gerekli")
    private String password;

}
