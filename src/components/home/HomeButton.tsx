'use client'
const HomeButton = () => {
    const handleClick = () => {
        console.log("===handleClick==");
    }
    return(
        <button onClick={handleClick}>Hello</button>
    )
}
export default HomeButton