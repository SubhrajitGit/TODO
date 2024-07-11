package com.todo.ToDoApplication.controller;

import com.todo.ToDoApplication.dto.TodoDto;
import com.todo.ToDoApplication.models.Todo;
import com.todo.ToDoApplication.services.TodoService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/todo")
@CrossOrigin("*")
public class TodoController {
    @Autowired
    private TodoService service;
    @Autowired
    private ModelMapper modelMapper;
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody TodoDto todo){
       return service.todoCreate(todo);
    }
    @GetMapping("/all")
    public ResponseEntity<List<Todo>> allTodo(){
        List<Todo> todoDtos = service.allTodo();
        return ResponseEntity.ok(todoDtos);
    }
    @GetMapping("/get/{id}")
    public ResponseEntity<?> singleTodo(@PathVariable Integer id){
        Todo singleTodo = service.getSingleTodo(id);
        return ResponseEntity.ok(singleTodo);
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateTodo(@PathVariable Integer id,@RequestBody TodoDto todo){
       Todo TodoDetails = modelMapper.map(todo,Todo.class);
       Todo updateTodo = service.updateTodo(id,TodoDetails);
       return ResponseEntity.ok("TODO UPDATED SUCESSFULLY");
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteTodo(@PathVariable Integer id){
        return service.deleteTodo(id);
    }
}
