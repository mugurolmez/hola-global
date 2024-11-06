package com.holadev.HolaGlobal.repo;

import com.holadev.HolaGlobal.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface CustomerRepository extends JpaRepository<Customer,Long> {
    boolean existsByPassportNumber(String passportNumber);
    Optional<Customer> findByPassportNumber(String passportNumber);

    List<Customer> findByState(String state);

}
