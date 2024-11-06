package com.holadev.HolaGlobal.controller;

import com.holadev.HolaGlobal.dto.Response;
import com.holadev.HolaGlobal.dto.UserDTO;
import com.holadev.HolaGlobal.entity.Customer;
import com.holadev.HolaGlobal.entity.User;
import com.holadev.HolaGlobal.service.interfac.IUserService;
import com.holadev.HolaGlobal.utils.results.DataResult;
import com.holadev.HolaGlobal.utils.results.Result;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private IUserService userService;

    @GetMapping("/all")
    @PreAuthorize("hasAnyAuthority('ADMIN', 'MANAGER')")
    public DataResult<List<UserDTO>> getAllUser(){
        return  userService.getAllUser();
    }
    @GetMapping("/get-by-id{userId}")
    public ResponseEntity<Response> getUserById(@PathVariable("userId") String userId){
        Response response=userService.getUserById(userId);
        return  ResponseEntity.status(response.getStatusCode()).body(response);
    }
    @PreAuthorize("hasAnyAuthority('ADMIN', 'MANAGER')")

    @DeleteMapping("/delete-by-id/{userId}")
    public Result deleteUser(@PathVariable("userId") Long userId){
     return userService.deleteUser(userId);
    }
    @GetMapping("/get-logged-in-profile-info")
    public ResponseEntity<Response> getLoggedUser() {
        Authentication authentication= SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();
        Response response=userService.getMyInfo(email);
        return  ResponseEntity.status(response.getStatusCode()).body(response);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping(value = "/update")
    public Result update(@Valid @RequestBody UserDTO userDTO){

        return userService.update(userDTO);
    }
}
