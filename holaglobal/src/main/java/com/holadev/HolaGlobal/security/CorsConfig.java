package com.holadev.HolaGlobal.security;


import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {

    @Value("${frontend.url}")
    private String frontendUrl;

    @PostConstruct
    public void printFrontendUrl() {
        System.out.println("Frontend URL: " + frontendUrl);
    }
    @Bean
    public WebMvcConfigurer webMvcConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins(frontendUrl) // İzin verilen kaynaklar
                        .allowedMethods("GET", "POST", "PUT", "DELETE")
                        .allowedHeaders("*") // İzin verilen başlıklar
                        .allowCredentials(true);
            }

        };
    }
}