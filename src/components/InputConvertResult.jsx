import React, { useState } from 'react'
import './InputConvertResult.css'
import 'antd/dist/antd.css';
import { Tooltip } from 'antd';

export default _ => {
    const [value, setValue] = useState('')
    const [valueConverted, setValueConverted] = useState('')

    const convertBinaryToDecimal = (numberToConvert) => {
        let valueSplitted = String(numberToConvert).split('')
        let finalValue = 0

        for (let i = 0; i < valueSplitted.length; i++) {
            let expoent = valueSplitted.length - 1 - i
            finalValue += (Number(valueSplitted[i]) * Math.pow(2, (expoent)))
        }

        return finalValue
    }

    const clearInputAndResult = _ => {
        setValue('')
        setValueConverted('')
    }

    return (
        <>
            <Tooltip placement='top' title="To clear the field, just double click">
                <input value={value} maxLength={8} style={{ textAlign: 'center' }}
                    onDoubleClick={_ => clearInputAndResult()}
                    onChange={(event) => {
                        let receivedValue = event.target.value
                        let isValidBinary = receivedValue.split('').every(x => x == 0 || x == 1)
                        if (isValidBinary) {
                            setValue(receivedValue)
                            setValueConverted(convertBinaryToDecimal(receivedValue))
                        }
                    }} />
            </Tooltip>

            <h2>Result: {valueConverted}</h2>
        </>
    )
}