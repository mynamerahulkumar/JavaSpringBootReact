package com.expenserestapi.expenseappapi.controller;

import com.expenserestapi.expenseappapi.dto.ExpenseDTO;
import com.expenserestapi.expenseappapi.io.ExpenseResponse;
import com.expenserestapi.expenseappapi.service.ExpenseService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

/**
 * This is controller class for expense method
 * Author:Rahul Kumar
 */
@RestController("/api/v1")
@RequiredArgsConstructor
@Slf4j
@CrossOrigin("*")
public class ExpenseController {

    private final ExpenseService expenseService;

    private final ModelMapper modelMapper;

    /**
     * get expense details from db
     * @return as list
     */

    @GetMapping("/expense")
    public List<ExpenseResponse> getExpense(){
        // call the service method
        log.info("Get/Expenses is called..");
        List<ExpenseDTO> expenseDTOList= expenseService.getAllExpense();
        log.info("Printing the data from service"+expenseDTOList);
        //convert the expense DTO

      List<ExpenseResponse>  responses= expenseDTOList.stream().map(expenseDTO -> mapToExpenseResponse(expenseDTO)).collect(Collectors.toList());
        //return the list/response
        return  responses;
    }
    @GetMapping("/expense/{expenseId}")
    public ExpenseResponse getExpense(@PathVariable String expenseId){
        log.info(" Expense id {}",expenseId);
        ExpenseDTO expenseDTO=expenseService.getExpenseById(expenseId);
        return mapToExpenseResponse(expenseDTO);
    }

    /**
     * method to convert expensedto to expenseResponse
     * @param expenseDTO
     * @return
     */
    private   ExpenseResponse mapToExpenseResponse(ExpenseDTO expenseDTO){
        return  modelMapper.map(expenseDTO,ExpenseResponse.class);
    }

    /**
     * delete the expense by expenseid
     * @param expenseId
     */
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/expense/{expenseId}")
    private void  deleteByExpenseId(@PathVariable String expenseId){
        log.info("Deleted expense id {}",expenseId);
        expenseService.deleteByExpenseId(expenseId);
    }

}
