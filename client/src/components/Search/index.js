import React from 'react'
import {Input} from './styles'

export default function Search(props) {
    const {event, value} = props
    return (
        <Input value={value} onChange={event}/>
    )
}
