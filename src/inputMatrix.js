var InputMatrix=(params)=>{
    return(
        <div id="input">
            <table style={{"borderWidth":"2px", 'borderColor':"#000000", 'borderStyle':'solid','margin':'20px'}}>
                <tbody>
                    {params.randomMatrix.map((item,index)=>{
                        return(
                            <tr key={index}>
                                {item.map((innerItem,innerIndex)=>{
                                    var string=index+"_"+innerIndex
                                    return(
                                        <td key={string} style={{"borderWidth":"2px", 'borderColor':"#000000", 'borderStyle':'solid','padding':'10px','margin':'0px'}}>{innerItem}</td>
                                    )
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