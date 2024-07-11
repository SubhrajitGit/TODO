package com.todo.ToDoApplication.services;

import com.todo.ToDoApplication.dto.TodoDto;
import com.todo.ToDoApplication.exception.TodoNotFoundException;
import com.todo.ToDoApplication.models.Todo;
import com.todo.ToDoApplication.repository.TodoRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;

@Service
public class TodoService {
    @Autowired
    TodoRepository repository;
    @Autowired
    private ModelMapper modelMapper;
    public ResponseEntity<?> todoCreate(TodoDto todo) {
        Todo newTodo = modelMapper.map(todo, Todo.class);
        repository.save(newTodo);
        return ResponseEntity.status(HttpStatus.CREATED).body("Todo created successfully");
    }

    public List<Todo> allTodo() {
        return repository.findAll();
    }

    public Todo getSingleTodo(Integer id) {
        Optional<Todo> getTodo = repository.findById(id);
        if(getTodo.isEmpty()){
            throw new TodoNotFoundException("No TODO Avilable in this id");
        }
        return getTodo.get();
    }

    public Todo updateTodo(Integer id, Todo todo) {
        Optional<Todo> getTodo = repository.findById(id);
        Todo existingTodo = getTodo.get();
        if(getTodo.isEmpty()){
            throw new TodoNotFoundException("No TODO AVILABLE IN THIS ID");
        }
        else{
            if(existingTodo.getTitle() != null)
            {
                existingTodo.setTitle(todo.getTitle());
            }
            if(existingTodo.getDescription() != null)
            {
                existingTodo.setDescription(todo.getDescription());
            }
            if(existingTodo.getStatus() != null)
            {
                existingTodo.setStatus(todo.getStatus());
            }
            existingTodo.setTimestamp(new Timestamp(System.currentTimeMillis()));
        }
        return repository.save(existingTodo);
    }

    public ResponseEntity<?> deleteTodo(Integer id) {
        Optional<Todo> getTodo = repository.findById(id);
        if(getTodo.isPresent()){
            repository.deleteById(getTodo.get().getId());
            return ResponseEntity.status(HttpStatus.OK).body("TODO DELETED SUCESSFULLY");
        }
        else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("NO TODO AVILABLE");
        }
    }
}
