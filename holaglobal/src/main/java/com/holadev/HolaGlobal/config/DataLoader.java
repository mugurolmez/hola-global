package com.holadev.HolaGlobal.config;

import com.holadev.HolaGlobal.entity.User;
import com.holadev.HolaGlobal.repo.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class DataLoader {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public DataLoader(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Bean
    public CommandLineRunner loadData() {
        return args -> {
            if (!userRepository.existsByEmail("holatercume@gmail.com")) {
                User adminUser = new User();
                adminUser.setEmail("holatercume@gmail.com");
                adminUser.setPassword(passwordEncoder.encode("HolaAlper"));
                adminUser.setRole("ADMIN");
                adminUser.setName("Alper");
                adminUser.setPhoneNumber("05079117483");
                userRepository.save(adminUser);
            }
        };
    }
}
