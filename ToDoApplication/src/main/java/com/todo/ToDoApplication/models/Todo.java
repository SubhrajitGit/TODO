package com.todo.ToDoApplication.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "TODO")
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "timestamp")
    private Timestamp timestamp;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false)
    private TodoStatus status = TodoStatus.PENDING;
}
