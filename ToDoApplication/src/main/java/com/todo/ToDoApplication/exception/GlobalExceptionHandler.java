package com.todo.ToDoApplication.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(TodoNotFoundException.class)
    public ResponseEntity<String> handleToDoNotFoundException(TodoNotFoundException ex){
        return  ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(ex.getMessage());
    }
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handleValidationException(MethodArgumentNotValidException ex){
        Map<String,String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach(
                error ->{
                    String fieldName =((FieldError)error).getField();
                    String errorMessage = error.getDefaultMessage();
                    errors.put(fieldName,errorMessage);
                }
        );
        ErrorResponse errorResponse = new ErrorResponse(errors);
        errorResponse.setMessage("Validation failed");
        errorResponse.setStatus(HttpStatus.BAD_REQUEST.value());
        errorResponse.setTimestamp(LocalDateTime.now());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(errorResponse);
    }
    @ExceptionHandler(Exception.class)
    public  ResponseEntity<ErrorResponse> handleGenericException(Exception ex){
        Map<String,String> errors = new HashMap<>();
        errors.put("error",ex.getMessage());
        ErrorResponse errorResponse = new ErrorResponse(errors);
        errorResponse.setMessage("An error occurred");
        errorResponse.setStatus(HttpStatus.INTERNAL_SERVER_ERROR.value());
        errorResponse.setTimestamp(LocalDateTime.now());
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(errorResponse);
    }

}
