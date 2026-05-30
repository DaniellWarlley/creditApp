import { useState, useCallback } from "react"

export default function UseToggle(){
    const [toggle, setToggle] = useState(false)

    const handleToggle = useCallback(() => {
        setToggle(prev => !prev)
    }, [])

    return{
        toggle,
        handleToggle
    }
}