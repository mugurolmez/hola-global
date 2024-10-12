package com.holadev.HolaGlobal.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.holadev.HolaGlobal.entity.User;
import lombok.Data;

import java.util.List;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Response {

    private int statusCode;
    private String message;
    private String token;
    private String role;
    private String expirationTime;
    private UserDTO user;
    private List<UserDTO> userList;

}
