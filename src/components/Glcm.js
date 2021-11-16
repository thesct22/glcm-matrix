var Glcm=(params)=>{
    var glcmArray;
    var assign0= async()=>{
        glcmArray= [ [0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0]
                ]
    }
    var assign=async (matrix)=>{
        if(params)
            for(var i=0;i<params.randomMatrix.length;i++)
                for(var j=0;j<params.randomMatrix[i].length-1;j++){
                    var c=params.randomMatrix[i][j];
                    var r=params.randomMatrix[i][j+1];
                    if(c!==undefined)
                        matrix[r-1][c-1]+=1;
                }
    }
    assign0().then(assign(glcmArray));
    

    return(
        <div id="input">
            <table style={{'margin':'20px'}}>
                <tbody>
                    <tr key="column_number">
                        {
                            glcmArray[0].map((item,index)=>
                                <td key={index} style={{'padding':'10px','margin':'0px'}}>{index+1}</td>
                            )
                        }
                    </tr>
                    {glcmArray.map((item,index)=>{
                        return(
                            <tr key={index}>
                                {item.map((innerItem,innerIndex)=>{
                                    var string=index+"_"+innerIndex
                                    return(
                                        <td key={string} style={{"borderWidth":"2px", 'borderColor':"#000000", 'borderStyle':'solid','padding':'10px','margin':'0px'}}>{innerItem}</td>
                                    )
                                })}
                                <td key="row_number" style={{'padding':'10px','margin':'0px'}}>{index+1}</td>

                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>    )
}

export default Glcm;