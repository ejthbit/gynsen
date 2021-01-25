import { Dialog, Modal } from '@material-ui/core'
import { useState } from 'react'

const Order = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <button onClick={() => setIsOpen(true)}>Order</button>
            <Dialog open={isOpen} maxWidth="xl">
                <button onClick={() => setIsOpen(false)}>X</button>
                <iframe
                    style={{ width: '1000px', height: '600px' }}
                    src="https://mudr-miroslav-vanek.zdravotniregistr.cz/#orfeo"
                    title="reservation"
                />
            </Dialog>
        </>
    )
}

export default Order
