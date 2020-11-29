import React from 'react'
import Card from './components/Card'
import InputConvertResult from './components/InputConvertResult'
import './App.css'

export default _ => {
    return(
        <div className="container">
            <Card title="Convert binary to decimal">
                <InputConvertResult/>
            </Card>
        </div>
    )
}