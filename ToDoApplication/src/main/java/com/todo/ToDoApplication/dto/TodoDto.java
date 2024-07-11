package com.todo.ToDoApplication.dto;

import com.todo.ToDoApplication.models.TodoStatus;
import jakarta.validation.constraints.NotBlank;

import java.sql.Timestamp;

public class TodoDto {
        @NotBlank(message = "Title cannot be blank")
        private String title;

        @NotBlank(message = "Description cannot be blank")
        private String description;

        private Timestamp timestamp;
        private TodoStatus status;

        // Getters and Setters

        public String getTitle() {
                return title;
        }

        public void setTitle(String title) {
                this.title = title;
        }

        public String getDescription() {
                return description;
        }

        public void setDescription(String description) {
                this.description = description;
        }

        public Timestamp getTimestamp() {
                return timestamp;
        }

        public void setTimestamp(Timestamp timestamp) {
                this.timestamp = timestamp;
        }

        public TodoStatus getStatus() {
                return status;
        }

        public void setStatus(TodoStatus status) {
                this.status = status;
        }

        // Constructors

        public TodoDto() {
        }

        public TodoDto(String title, String description, Timestamp timestamp, TodoStatus status) {
                this.title = title;
                this.description = description;
                this.timestamp = timestamp;
                this.status = status;
        }
}
