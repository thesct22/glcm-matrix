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
        var i,j,c,r;
        if(params)
            if(params.degreeValue===0){
                for(i=0;i<params.randomMatrix.length;i++)
                    for(j=0;j<params.randomMatrix[i].length-params.distanceValue+1;j++){
                        c=params.randomMatrix[i][j];
                        r=params.randomMatrix[i][j+params.distanceValue-1];
                        if(c!==undefined)
                            matrix[r-1][c-1]+=1;
                    }
            }
            else if(params.degreeValue===90){
                for(i=0;i<params.randomMatrix[0].length;i++)
                    for(j=0;j<params.randomMatrix.length-params.distanceValue+1;j++){
                        c=params.randomMatrix[j][i];
                        r=params.randomMatrix[j+params.distanceValue-1][i];
                        if(c!==undefined)
                            matrix[r-1][c-1]+=1;
                    }
            }
            else if(params.degreeValue===45){
                for(i=params.distanceValue-1;i<params.randomMatrix.length;i++)
                    for(j=0;j<params.randomMatrix[i].length-params.distanceValue+1;j++){
                        c=params.randomMatrix[i-params.distanceValue+1][j+params.distanceValue-1];
                        r=params.randomMatrix[i][j];
                        if(c!==undefined)
                            matrix[r-1][c-1]+=1;
                    }
            }
            else if(params.degreeValue===135){
                for(i=0;i<params.randomMatrix.length-params.distanceValue+1;i++)
                    for(j=0;j<params.randomMatrix[i].length-params.distanceValue+1;j++){
                        c=params.randomMatrix[i][j];
                        r=params.randomMatrix[i+params.distanceValue-1][j+params.distanceValue-1];
                        if(c!==undefined)
                            matrix[r-1][c-1]+=1;
                    }
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