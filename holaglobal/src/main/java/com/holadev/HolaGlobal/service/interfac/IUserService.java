package com.holadev.HolaGlobal.service.interfac;

import com.holadev.HolaGlobal.dto.*;
import com.holadev.HolaGlobal.entity.Customer;
import com.holadev.HolaGlobal.entity.User;
import com.holadev.HolaGlobal.utils.results.DataResult;
import com.holadev.HolaGlobal.utils.results.Result;

import java.util.List;


public interface IUserService {
   // Response register(User user);
    DataResult<User> register(RegisterRequest registerRequest);

    Response login(LoginRequest loginRequest);
    DataResult<List<UserDTO>> getAllUser();

    Result update(UserDTO userDTO);
    Result deleteUser(Long userId);
    Response getUserById(String userId);
    Response getMyInfo(String email);

}
