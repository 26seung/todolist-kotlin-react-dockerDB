package com.todolist.todolist.repository

import com.todolist.todolist.domain.Todo
import org.springframework.data.repository.CrudRepository

interface TodoRepository: CrudRepository<Todo,Long>