import { useState } from "react"

interface AddTodoFormProps {
    onSubmit: (title: string) => void;
}

export default function AddTodoForm() {
    const [input, setInput] = useState("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!input.trim()) return;

        onSubmit(input);
        setInput("");
    }

    return(
        <form className="flex" onSubmit={handleSubmit}>
            <input value={input} placeholder="What is to be done?" className="rounded-s-md grow border border-gray-400 p-2"/>
            <button
        type="submit"
        className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800"
      >
        Add
      </button>
        </form>
    )
}