package com.expenserestapi.expenseappapi.repository;

import com.expenserestapi.expenseappapi.entity.ExpenseEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public interface ExpenseRepository  extends JpaRepository<ExpenseEntity,Long> {

}
