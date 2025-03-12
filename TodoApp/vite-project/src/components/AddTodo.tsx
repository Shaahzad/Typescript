import { ChangeEvent, FormEvent, useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"


type AddTodoProps = {
    onaddTodo: (text: string) => void
}

const AddTodo : React.FC<AddTodoProps> = (props) => {
    const [text, settext] = useState<string>('')

    const changeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
        settext(event.target.value)
    }

   const submitHandler = (event: FormEvent) => {
        event.preventDefault()
        props.onaddTodo(text)
        settext("")
   }

    return <form onSubmit={submitHandler} className="flex items-center gap-5">
        <Input onChange={changeEventHandler} type="text" value={text} placeholder="Write a new Todo ..." className="w-fit"/>
        <Button type="submit">Add Todo</Button>
    </form>
}

export default AddTodo