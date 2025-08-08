import { Component } from "react"
import { useState } from "react"
import './App.css'



function App () {
    const [counter, setCounter] = useState(0)
    const [inputValue, setInputValue] = useState(0)

    const incrementCounter = () => {
        setCounter(counter + 1)
    }
    
    const setCounterNumber = () => {
        setCounter(inputValue)
    }

    return (
        <>
            <Count counter = {counter} />
            <PlusButton setCounter = {setCounter} 
                incrementCounter = {incrementCounter}
            />
            <MinusButton setCounter = {setCounter} />
            <CounterInput inputValue={inputValue}
                setInputValue = {setInputValue}
                setCounterNumber = {setCounterNumber}
            />
        </>
    )
}

function CounterInput({ inputValue, setInputValue, setCounterNumber }) {
    return (
        <>
            <input type="number" value={inputValue} onChange={(e) => 
                setInputValue(e.target.value)
            }/>
            <button onClick={setCounterNumber}>입력</button>
        </>
    )
}



function PlusButton ({ incrementCounter }) {
    return (
        <button onClick = {incrementCounter}
        >
            +
        </button>
    )
}

function MinusButton ({ setCounter }) {
    return (
        <button onClick = {() => {
            setCounter((prev) => {
                return prev - 1
            })
        }}>
            -
        </button>
    )
}


function Count ({counter}) {
    return <div>counter : {counter}</div>
}





// class App extends Component {
//     state = { counter: 0 }
//     incrementCounter = () => {
//         this.setState({counter: this.state.counter + 1})
//     }

//     decrementCounter = () => {
//         this.setState({counter: this.state.counter - 1})
//     }
    
//     render () {
//         return (
//             <>
//                 <Count counter={ this.state.counter } />
//                 <PlusButton incrementCounter={this.incrementCounter}/>
//                 <MinusButton decrementCounter={this.decrementCounter}/>



//                 {/* <button onClick={() => {
//                     this.setState({
//                         counter: this.state.counter - 1
//                     })
//                 }}>
//                     -
//                 </button> */}
//             </>
//         )
//     }
// }

// // 상태 끌어 올리기 (Lifting State Up) 
// class PlusButton extends Component {
//     render () {
//         return (
//             <button onClick={this.props.incrementCounter}
//             >
//                 +
//             </button>
//         )
//     }
// }

// class MinusButton extends Component {
//     render () {
//         return (
//             <button onClick={this.props.decrementCounter}
//             >
//                 -
//             </button>
//         )
//     }
// }



// // props
// class Count extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render () {
//         return (
//             <div>counter: {this.props.counter}</div>
//         )
//     }
// }


export default App
