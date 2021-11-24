import { useState } from "react";
var Glcm=(params)=>{
    var [glcmArray,setGlcmArray]=useState( [ 
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
    ]);
    var [forceUpdate,setForceUpdate]=useState(0);
    var assign0=()=>{
        glcmArray= [ 
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0]
        ]
    }
   

    var changeColour=(index,innerIndex)=>{
        let newColourMatrix=params.GlcmColour;
        const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let hex = '#';
        for(let i = 0; i < 6; i++){
            const index = Math.floor(Math.random() * hexValues.length)
            hex += hexValues[index];
        }
        
        setForceUpdate(forceUpdate===hex?"":hex);
        newColourMatrix[index][innerIndex]=newColourMatrix[index][innerIndex]==="#FFFFFF"?hex:"#FFFFFF";
        params.setGlcmColour(newColourMatrix);
    }

    var assign=(matrix)=>{
        var i,j,c,r;
        if(params)
            if(params.degreeValue===0){
                for(i=0;i<params.randomMatrix.length;i++)
                    for(j=0;j<params.randomMatrix[i].length-params.distanceValue+1;j++){
                        r=params.randomMatrix[i][j];
                        c=params.randomMatrix[i][j+params.distanceValue-1];
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
    assign0();
    assign(glcmArray);
    
    var setInputColour=params.setInputColour;
    var inputColour=params.inputColour;
    var findColoured=()=>{
        var w,q;
        for(var i=0;i<8;i++){
            for(var j=0;j<8;j++){
                if(params.GlcmColour[i][j]!=="#FFFFFF"){
                    if(params.degreeValue===0){
                        for(q=0;q<params.randomMatrix.length;q++){
                            for(w=0;w<params.randomMatrix[q].length-params.distanceValue+1;w++){
                                if(params.randomMatrix[q][w]===i+1&&params.randomMatrix[q][w+params.distanceValue-1]===j+1){
                                    inputColour[q][w]=params.GlcmColour[i][j];
                                    inputColour[q][w+params.distanceValue-1]=params.GlcmColour[i][j];                                    
                                }
                            }
                        }
                    }
                    else if(params.degreeValue===90){
                        for(q=0;q<params.randomMatrix.length-params.distanceValue+1;q++){
                            for(w=0;w<params.randomMatrix[q].length;w++){
                                if(params.randomMatrix[q][w]===j+1&&params.randomMatrix[q+params.distanceValue-1][w]===i+1){
                                    inputColour[q][w]=params.GlcmColour[i][j];
                                    inputColour[q+params.distanceValue-1][w]=params.GlcmColour[i][j];                                    
                                }
                            }
                        }
                    }
                    else if(params.degreeValue===45){
                        for(q=params.distanceValue-1;q<params.randomMatrix.length;q++){
                            for(w=0;w<params.randomMatrix[q].length-params.distanceValue+1;w++){
                                if(params.randomMatrix[q][w]===i+1&&params.randomMatrix[q-params.distanceValue+1][w+params.distanceValue-1]===j+1){
                                    inputColour[q][w]=params.GlcmColour[i][j];
                                    inputColour[q-params.distanceValue+1][w+params.distanceValue-1]=params.GlcmColour[i][j];                                    
                                }
                            }
                        }
                    }
                    else if(params.degreeValue===135){
                        for(q=0;q<params.randomMatrix.length-params.distanceValue+1;q++){
                            for(w=0;w<params.randomMatrix[q].length-params.distanceValue+1;w++){
                                if(params.randomMatrix[q][w]===j+1&&params.randomMatrix[q+params.distanceValue-1][w+params.distanceValue-1]===i+1){
                                    inputColour[q][w]=params.GlcmColour[i][j];
                                    inputColour[q+params.distanceValue-1][w+params.distanceValue-1]=params.GlcmColour[i][j];                                    
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    findColoured()

    var assign0ToInputColour=(array)=>{
        for(var ii=0;ii<array.length;ii++){
            let innerColourGlcm=[]
            for(var jj=0;jj<array[ii].length;jj++)
                innerColourGlcm.push(`#FFFFFF`)
            array[ii]=innerColourGlcm;
        }
        setInputColour(array);
    }

    var assign0ToOutputColour=()=>{
        let arr=params.GlcmColour;
        for(var i=0;i<arr.length;i++)
            for(var j=0;j<arr[i].length;j++)
                arr[i][j]="#FFFFFF"
        params.setGlcmColour(arr);
    }

    var clearColour=()=>{
        assign0ToOutputColour();
        assign0ToInputColour(inputColour);
        setForceUpdate(forceUpdate+"_")

    }

    return(
        <div id="input">
            <div>
                <div>
                    <button onClick={clearColour} className="btn btn-success align-self-start">Clear Colours</button>
                </div>
            <table style={{'margin':'20px'}}>
                <tbody>
                    {params.randomMatrix.map((item,index)=>{
                        return(
                            <tr key={index}>
                                {item.map((innerItem,innerIndex)=>{
                                    if (inputColour[index]===undefined){
                                        let inner=[]
                                        for(var qq=0;qq<innerItem.length;qq++)
                                            inner.push("#FFFFFF");
                                        inputColour.push(inner);
                                    }
                                    var string=index+"_"+innerIndex
                                    return(
                                        <td key={string} 
                                            bgcolor={inputColour[index][innerIndex]}
                                            style={{"borderWidth":"2px", 'borderColor':"#000000", 'borderStyle':'solid','padding':'10px','margin':'0px'}}
                                        >
                                            {innerItem}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>
            <div>
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
                                            <td key={string} 
                                                style={{"borderWidth":"2px", 'borderColor':"#000000", 'borderStyle':'solid','padding':'10px','margin':'0px'}}
                                                bgcolor={params.GlcmColour[index][innerIndex]}
                                                onClick={()=>changeColour(index,innerIndex)}
                                            >
                                                {innerItem}
                                            </td>
                                        )
                                    })}
                                    <td key="row_number" style={{'padding':'10px','margin':'0px'}}>{index+1}</td>

                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>    )
}

export default Glcm;