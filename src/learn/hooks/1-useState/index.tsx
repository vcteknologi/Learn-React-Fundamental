import React from 'react'

const LearnUseState = () => {
    const [count, setCount] = React.useState<number>(0)
    return (
        <div>
            <p>You clicked {count} times</p>
            <button type='button' onClick={() => setCount(count + 1)}>
                +1
            </button>
            <button type='button' onClick={() => setCount((c) => c + 2)}>
                +2
            </button>
            <button type='button' onClick={() => setCount(0)}>
                Reset
            </button>
        </div>
    )
}

export default LearnUseState