// PascalCasing - This is the convention that 
// React developers use in the programming world. 
// You capitalise the first letter of each word in 
// a variable of compound word.
function Message() {
    // JSX: Javascript XML 
    // Can create dynamic content using if statements and constants
    const name = "Josh";
    if (name)
        return <h1>Hello! My Name Is {name}</h1>;
    return <h2>Hello Everyone!</h2>
}
// export the function as an App component
export default Message