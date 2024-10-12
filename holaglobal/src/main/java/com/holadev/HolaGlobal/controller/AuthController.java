package com.holadev.HolaGlobal.controller;

import com.holadev.HolaGlobal.dto.LoginRequest;
import com.holadev.HolaGlobal.dto.RegisterRequest;
import com.holadev.HolaGlobal.dto.Response;
import com.holadev.HolaGlobal.dto.UserDTO;
import com.holadev.HolaGlobal.entity.User;
import com.holadev.HolaGlobal.service.interfac.IUserService;
import com.holadev.HolaGlobal.utils.results.DataResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private IUserService userService;

   /* @PostMapping("/register")
    public ResponseEntity<Response> register(@RequestBody User user ){
        System.out.println(user);
        Response response = userService.register(user);
        return  ResponseEntity.status(response.getStatusCode()).body(response);
    }*/
   @PostMapping("/register")
    public DataResult<User> register(@RequestBody RegisterRequest registerRequest){
        return userService.register(registerRequest);
    }
    @PostMapping("/login")
    public ResponseEntity<Response> login(@RequestBody LoginRequest loginRequest ){
        Response response = userService.login(loginRequest);
        return  ResponseEntity.status(response.getStatusCode()).body(response);
    }
}
