import React from 'react'
import { Card, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { DeleteIcon } from 'lucide-react'

type todolistprops = {
    items : {id: string, text: string}[]
}

const Todolist : React.FC<todolistprops> = (props) => {
    console.log(props.items)
  return (
    <div className='grid grid-cols-5 gap-3 my-5'>
        {
            props.items.map((item) => {
                return <Card key={item.id}>
                    <CardHeader className='flex flex-row items-center justify-between'>
                        <CardTitle>{item.text}</CardTitle>
                        <Button variant="destructive" size={'icon'}><DeleteIcon /></Button>
                    </CardHeader>
                </Card>
            })
        }
    </div>
  )
}

export default Todolist