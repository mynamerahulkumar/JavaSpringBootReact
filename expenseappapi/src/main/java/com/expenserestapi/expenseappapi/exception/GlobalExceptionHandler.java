package com.expenserestapi.expenseappapi.exception;

import com.expenserestapi.expenseappapi.io.ErrorObject;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
/**
 * Global exception handler
 */
import java.util.Date;
@RestControllerAdvice
public class GlobalExceptionHandler {
    /**
     *
     * @param exception
     * @return
     */

    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(ResourceNotFoundException.class)
    public ErrorObject handleResourceNotFoundException(ResourceNotFoundException exception){
       return ErrorObject.builder()
                .statusCode(HttpStatus.NOT_FOUND.value())
                .errorCode("DATA_NOT_FOUND")
                .message(exception.getMessage())
                .timestamp(new Date())
                .build();
    }
}
