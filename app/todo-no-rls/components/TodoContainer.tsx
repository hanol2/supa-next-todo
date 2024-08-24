"use client";
import React, { useEffect } from 'react'
import useTodosController from '../hooks/useTodosController';
import TodoList from '@/components/ui/TodoList';

const TodoContainer = () => {
  useEffect(()=>{
    onUpdateTodos(14, "업데이트함수가 실행되는지 확인")
  },[])
  const { 
    loading,
    todos,
    onUpdateTodos,
    onCreateEmptyTodos,
    onDeleteTodos,
    onSearchTodos,
 } = useTodosController();

  console.log(">>loading",loading);
  console.log(">>todos", todos);
  return (
    <div>
      <TodoList 
        sharedUserFullName='test user'
        ownerUserId='123123' 
        loading={loading}
        todoListData={todos}
        isReadOnly={false}
        onUpdate={onUpdateTodos}
        onCreate={onCreateEmptyTodos}
        onDelete={onDeleteTodos}
        onSearch={onSearchTodos}
      />
    </div>
  )
}

export default TodoContainer