import React from 'react'

const SingleTodo = () => {

    const todo = {
        text: "Test your todos",
        done: false
    }

    const doneInfo = "Todo done!"
    const notDoneInfo = "Todo NOT done!"

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '70%', margin: 'auto' }}>
            <span>
              {todo.text} 
            </span>
            {todo.done ? doneInfo : notDoneInfo}
          </div>
    )
}

export default SingleTodo
