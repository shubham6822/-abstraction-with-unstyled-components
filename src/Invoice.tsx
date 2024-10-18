import React from 'react'
import Button from './Button'

export default function Invoice() {
    const [isLoading, setIsLoading] = React.useState(false)
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }

    return (
        <div className='flex justify-center items-center w-screen h-screen'>
            <form onSubmit={handleSubmit} className='shadow-lg p-7'>
                <label>
                    <span>Invoice number</span>
                    <input type="text" />
                </label>
                <label>
                    <span>Amount</span>
                    <input type="number" />
                </label>
                <Button isLoading={isLoading} className='bg-amber-400' type='submit'>Submit</Button>
            </form>
        </div>
    )
}
