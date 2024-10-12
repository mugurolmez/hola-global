package com.holadev.HolaGlobal.repo;

import com.holadev.HolaGlobal.entity.Customer;
import com.holadev.HolaGlobal.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CustomerRepository extends JpaRepository<Customer,Long> {
    boolean existsByPassportNumber(String passportNumber);
    Optional<Customer> findByPassportNumber(String passportNumber);

    List<Customer> findByState(String state);

}
