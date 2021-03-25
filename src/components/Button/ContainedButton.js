import React from 'react'
import {Button} from 'react-bootstrap'

const ContainedButton = ({text,size, variant}) => {
    return (
        <>
          <Button size={size} variant={variant} style={{backgroundColor : "#695A99", width: "100%"}}> { text } </Button>  
        </>
    )
}

export default ContainedButton
