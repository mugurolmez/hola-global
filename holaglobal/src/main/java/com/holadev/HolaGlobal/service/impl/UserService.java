package com.holadev.HolaGlobal.service.impl;

import com.holadev.HolaGlobal.dto.*;
import com.holadev.HolaGlobal.entity.User;
import com.holadev.HolaGlobal.exception.OurException;
import com.holadev.HolaGlobal.repo.UserRepository;
import com.holadev.HolaGlobal.service.interfac.IUserService;
import com.holadev.HolaGlobal.utils.JWTUtils;
import com.holadev.HolaGlobal.utils.mappers.ModelMapperService;
import com.holadev.HolaGlobal.utils.results.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService implements IUserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JWTUtils jwtUtils;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private ModelMapperService modelMapperService;

    @Override
    public DataResult<User> register(RegisterRequest registerRequest) {
      /*  if (registerRequest.getRole() == null || registerRequest.getRole().isBlank()) {
            registerRequest.setRole("MANAGER");
        }*/
        /*if(registerRequest.getRole().equals("ADMIN")){
            return new ErrorDataResult<>("ADMIN YETKİLİ KULLANICI EKLENEMEZ");
        }*/
        if (userRepository.existsByEmail(registerRequest.getEmail())) {
            return new ErrorDataResult<>(registerRequest.getEmail() + "Kayıtlı Kullanıcı");
        }
        User user=modelMapperService.forRequest().map(registerRequest,User.class);
        user.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
        System.out.println(user);
        userRepository.save(user);
        return new SuccessDataResult<>(user,"Yeni Kullanıcı Eklendi");
    }
   /* @Override
    public Response register(User user) {
        Response response = new Response();
        try {

            user.setPassword(passwordEncoder.encode(user.getPassword()));
            User savedUser = userRepository.save(user);
            UserDTO userDTO = Utils.mapUserEntityToUserDTO(savedUser);
            response.setStatusCode(200);
            response.setUser(userDTO);

        } catch (OurException e) {
            response.setStatusCode(400);
            response.setMessage(e.getMessage());
        } catch (Exception e) {
            response.setStatusCode(500);
            response.setMessage("Kayıt Sırasında Hata Oluştu" + e.getMessage());
        }

        return response;
    }*/



    @Override
    public Response login(LoginRequest loginRequest) {
        Response response = new Response();
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
            var user = userRepository.findByEmail(loginRequest.getEmail()).orElseThrow(() -> new OurException("Kullanıcı Bulumamadı"));
            var token = jwtUtils.generateToken(user);
            response.setStatusCode(200);
            response.setToken(token);
            response.setRole(user.getRole());
            response.setExpirationTime("7 Days");
            response.setMessage("Başarılı");

        } catch (OurException e) {
            response.setStatusCode(404);
            response.setMessage(e.getMessage());
        } catch (Exception e) {
            response.setStatusCode(500);
            response.setMessage("Kullanıcı Girişinde Hata Oluştu" + e.getMessage());
        }
        return response;
    }

    @Override
    public DataResult<List<UserDTO>> getAllUser() {
        List<User> users = userRepository.findAll();

        List<UserDTO> userDTOS=users.stream()
                .map(user -> this.modelMapperService
                        .forResponse()
                        .map(user,UserDTO.class))
                .toList();
        return new SuccessDataResult<>(userDTOS, "Kullanıcılar  listelendi");
    }

    @Override
    public Result update(UserDTO userDTO) {
        if (!userRepository.existsById(userDTO.getId())) {
            return new ErrorResult("Geçersiz Kullanıcı ID");
        }

        // Mevcut kullanıcıyı veritabanından alıyoruz
        User existingUser = userRepository.findById(userDTO.getId()).orElse(null);
        if (existingUser == null) {
            return new ErrorResult("Kullanıcı bulunamadı");
        }

        // Eğer mevcut yetkisi ADMIN değilse ve yeni yetki ADMIN olarak atanıyorsa hata döndür
      /*  if (!existingUser.getRole().equals("ADMIN") && userDTO.getRole().equals("ADMIN")) {
            return new ErrorResult("Bir kullanıcı ADMIN olarak atanamaz. Sadece mevcut ADMIN güncellenebilir.");
        }*/

        // Kullanıcı güncelleme işlemi
        User user = modelMapperService.forRequest().map(userDTO, User.class);

        // Eğer şifre değiştirilmişse, yalnızca o zaman encode et
        if (!userDTO.getPassword().equals(existingUser.getPassword())) {
            user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        } else {
            user.setPassword(existingUser.getPassword()); // Şifreyi değiştirmiyorsanız eski şifreyi kullanın
        }

        userRepository.save(user);
        return new SuccessResult("Kullanıcı Güncelleme Başarılı");
    }


    @Override
    public Result deleteUser(Long userId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        if (optionalUser.isEmpty()) {
            return new ErrorResult("Kullanıcı Bulunamadı");
        }
        User user=optionalUser.get();

        if(user.getRole().equals("ADMIN")){
            return new ErrorResult("Admin Yetkili Kullanıcı Silinemez");
        }

        try {
            userRepository.deleteById(userId);
            return new SuccessResult("Kullanıcı Silindi");
        } catch (OurException e) {
            return new ErrorResult("Kullanıcı Silme Hatası");
        }
    }
    @Override
    public Response getUserById(String userId) {
      /*  Response response = new Response();
        try {
           User user= userRepository.findById(Long.valueOf(userId)).orElseThrow(() -> new OurException("Kullanıcı Bulunamadı"));
            UserDTO userDTO=Utils.mapUserEntityToUserDTO(user);
            response.setStatusCode(200);
            response.setMessage("Başarılı");
            response.setUser(userDTO);

        } catch (OurException e) {
            response.setStatusCode(404);
            response.setMessage(e.getMessage());

        } catch (Exception e) {
            response.setStatusCode(500);
            response.setMessage("Kullanıcı Getirme Hatası" + e.getMessage());
        }*/
        return null;

    }

    @Override
    public Response getMyInfo(String email) {
        return null;
    }

   /* @Override
    public Response getMyInfo(String email) {
        Response response = new Response();
        try {
            User user= userRepository.findByEmail(email).orElseThrow(() -> new OurException("Kullanıcı Bulunamadı"));
            UserDTO userDTO=Utils.mapUserEntityToUserDTO(user);
            response.setStatusCode(200);
            response.setMessage("Başarılı");
            response.setUser(userDTO);

        } catch (OurException e) {
            response.setStatusCode(404);
            response.setMessage(e.getMessage());

        } catch (Exception e) {
            response.setStatusCode(500);
            response.setMessage("Kullanıcı Getirme Hatası" + e.getMessage());
        }
        return response;

    }*/
}
