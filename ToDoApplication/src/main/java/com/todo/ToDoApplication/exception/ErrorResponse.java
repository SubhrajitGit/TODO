package com.todo.ToDoApplication.exception;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.Map;

@Data
public class ErrorResponse {
    private String message;
    private Integer status;
    private LocalDateTime timestamp;
    private Map<String,String> errors;

    public ErrorResponse(String message, Integer status, LocalDateTime timestamp) {
        this.message = message;
        this.status = status;
        this.timestamp = timestamp;
    }

    public ErrorResponse(Map<String, String> errors) {
        this.errors = errors;
    }
}
