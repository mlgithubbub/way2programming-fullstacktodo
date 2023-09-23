package com.mlprograms.todo.repositories;

import com.mlprograms.todo.entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TodoRepository extends JpaRepository<Todo, Integer> {

    @Query(value = "SELECT * FROM TODO", nativeQuery = true)
    List<Todo> findAll();
}
