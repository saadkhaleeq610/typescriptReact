import TodoItem from "./components/todoItem"
import { dummyData } from "./data/todo"

function App() {

  return (
    <main className="py-10 h-screen">
      <h1 className="font-bold text-3xl text-center">Your todos</h1>
      <div className="max-w-lg mx-auto">
        <div className="space-y-2">
          {dummyData.map(todo => (
            <TodoItem/>
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
