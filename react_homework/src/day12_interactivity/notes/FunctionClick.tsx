export default function FunctionClick() {
    const clickHandler = () => {
        console.log('Button Clicked')
    }

    return <>
    <button onClick={clickHandler}>Function Click</button>
    </>
}