package com.holadev.HolaGlobal.service.interfac;

import com.holadev.HolaGlobal.dto.AddCustomerRequestDTO;
import com.holadev.HolaGlobal.dto.CustomerResponse;
import com.holadev.HolaGlobal.entity.Customer;
import com.holadev.HolaGlobal.utils.results.DataResult;
import com.holadev.HolaGlobal.utils.results.Result;

import java.util.List;

public interface ICustomerService {
    Result add(AddCustomerRequestDTO addCustomerRequestDTO);

    Result update(Customer customer);
    Result delete(long CustomerId);

    DataResult<List<CustomerResponse>> getAll();
    DataResult<List<CustomerResponse>> getAllCustomerByState(String state);



}
