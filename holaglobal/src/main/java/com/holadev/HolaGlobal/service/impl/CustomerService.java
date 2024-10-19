package com.holadev.HolaGlobal.service.impl;

import com.holadev.HolaGlobal.dto.AddCustomerRequestDTO;
import com.holadev.HolaGlobal.dto.CustomerResponse;
import com.holadev.HolaGlobal.entity.Customer;
import com.holadev.HolaGlobal.repo.CustomerRepository;
import com.holadev.HolaGlobal.service.interfac.ICustomerService;
import com.holadev.HolaGlobal.utils.mappers.ModelMapperService;
import com.holadev.HolaGlobal.utils.results.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CustomerService implements ICustomerService {
    @Autowired
    private CustomerRepository customerRepository;
    @Autowired
    private ModelMapperService modelMapperService;
    @Override
    public Result add(AddCustomerRequestDTO addCustomerRequestDTO) {

       if(customerRepository.existsByPassportNumber(addCustomerRequestDTO.getPassportNumber())) {

           return new ErrorResult("Pasaport Numarası Kayıtlı");

       }
       Customer customer =modelMapperService.forRequest().map(addCustomerRequestDTO,Customer.class);


       customerRepository.save(customer);

        return new SuccessDataResult<Customer>(customer,"Müşteri Eklendi");
    }

    @Override
    public Result update(Customer customer) {
        if(!customerRepository.existsById(customer.getId())){
            return new ErrorResult("Geçersiz Müşteri ID");
        }

        customerRepository.save(customer);
        return new SuccessResult("Müşteri Güncelleme Başarılı");
    }

    @Override
    public Result delete(long id) {
        if(!customerRepository.existsById(id)){
            return new ErrorResult("Müşteri ID Geçerli Değil");
        }

        customerRepository.deleteById(id);
        return new SuccessResult("Müşteri Başarıyla Silindi");
    }

    @Override
    public DataResult<List<CustomerResponse>> getAll() {
        List<Customer> customers = customerRepository.findAll();

        List<CustomerResponse> customerResponses=customers.stream()
                .map(customer -> this.modelMapperService
                        .forResponse()
                        .map(customer,CustomerResponse.class))
                .collect(Collectors.toList());
        return new SuccessDataResult<>(customerResponses, "Müşteriler  listelendi");
    }

    @Override
    public DataResult<List<CustomerResponse>> getAllCustomerByState(String state) {
        List<Customer> customers =customerRepository.findByState(state);

        if(customers.isEmpty()){
            return  new ErrorDataResult<>("Müşteri Bulunamadı");
        }
        List<CustomerResponse> customerResponses=customers.stream()
                .map(customer -> this.modelMapperService
                        .forResponse()
                        .map(customer,CustomerResponse.class))
                .toList();
        return new SuccessDataResult<>(customerResponses,"Müşteriler Listelendi");
    }
}
