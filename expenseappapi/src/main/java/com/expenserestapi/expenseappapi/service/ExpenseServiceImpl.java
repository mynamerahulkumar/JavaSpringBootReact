package com.expenserestapi.expenseappapi.service;

import com.expenserestapi.expenseappapi.dto.ExpenseDTO;
import com.expenserestapi.expenseappapi.entity.ExpenseEntity;
import com.expenserestapi.expenseappapi.repository.ExpenseRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
@Service
@RequiredArgsConstructor// it will create constructor of repo and model
@Slf4j
public class ExpenseServiceImpl  implements  ExpenseService{

    private final ExpenseRepository expenseRepository;

    private  final ModelMapper modelMapper;



    @Override
    public List<ExpenseDTO> getAllExpense() {
        List<ExpenseEntity> expenseEntitieslist=expenseRepository.findAll();
        log.info("");
        List<ExpenseDTO> expenseDTOList=expenseEntitieslist.stream().map(
                expenseEntity -> mapExpenseDTO(expenseEntity)).collect(Collectors.toList());
        return expenseDTOList;
    }

    public ExpenseDTO mapExpenseDTO(ExpenseEntity expeseEntity){
        return modelMapper.map(expeseEntity,ExpenseDTO.class);
    }
}
