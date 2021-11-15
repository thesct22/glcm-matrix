var InputMatrix=(randomArray)=>{
    console.log(randomArray.randomArray);
    return(
        <div id="input">
            <table>
                <tbody>
                    {randomArray.randomArray.map(item=>{
                        return(
                            <tr>
                                {item.map((innerItem,index)=>{
                                    return(<td key={index}>{innerItem}</td>)
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default InputMatrix;