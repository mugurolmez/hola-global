package com.holadev.HolaGlobal.controller;

import com.holadev.HolaGlobal.dto.AddCustomerRequestDTO;
import com.holadev.HolaGlobal.dto.CustomerResponse;
import com.holadev.HolaGlobal.entity.Customer;
import com.holadev.HolaGlobal.service.interfac.ICustomerService;
import com.holadev.HolaGlobal.utils.results.DataResult;
import com.holadev.HolaGlobal.utils.results.ErrorDataResult;
import com.holadev.HolaGlobal.utils.results.Result;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/customers")
public class CustomerController {
    @Autowired
    private ICustomerService customerService;
    @PreAuthorize("hasAnyAuthority('ADMIN', 'MANAGER')")

    @GetMapping("/all")
    public DataResult<List<CustomerResponse>> getAllUser(){
        return  customerService.getAll();
    }
    @PreAuthorize("hasAnyAuthority('ADMIN', 'MANAGER')")

    @GetMapping("/getAllCustomerByState/{state}")
    public DataResult<List<CustomerResponse>> getAllCustomerByState(@PathVariable String state) {
        return  customerService.getAllCustomerByState(state);
    }
    
//public
    @PostMapping(value = "/add")
    public Result add(@Valid @RequestBody AddCustomerRequestDTO addCustomerRequestDTO) {

        return customerService.add(addCustomerRequestDTO);
    }
    @PreAuthorize("hasAnyAuthority('ADMIN', 'MANAGER')")

    @DeleteMapping(value = "/delete/{id}")
    public Result delete(@PathVariable long id) {

        return customerService.delete(id);
    }

    @PreAuthorize("hasAnyAuthority('ADMIN', 'MANAGER')")

    @PutMapping(value = "/update")
    public Result update(@Valid @RequestBody Customer customer){

        return customerService.update(customer);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorDataResult<Object> handleValidationException(MethodArgumentNotValidException exceptions) {
        Map<String, String> validationErrors = new HashMap<String, String>();
        for (FieldError fieldError : exceptions.getBindingResult().getFieldErrors()) {
            validationErrors.put(fieldError.getField(), fieldError.getDefaultMessage());
        }
        ErrorDataResult<Object> errors = new ErrorDataResult<Object>(validationErrors, "Doğrulama hataları");
        return errors;
    }
}
