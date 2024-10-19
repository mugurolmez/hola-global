package com.holadev.HolaGlobal.dto;

import lombok.Data;

@Data
public class RegisterRequest {
    private String email;
    private String name;
    private String phoneNumber;
    private String password;
    private String role;
}
