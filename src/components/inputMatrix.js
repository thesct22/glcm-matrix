import { useState } from "react";
var InputMatrix=(params)=>{
    var [toUpdate,setToUpdate]=useState(params.GlcmColour);
    var inputColour=[]
    for(var ii=0;ii<params.randomMatrix.length;ii++){
        let innerInputColour=[]
        for(var jj=0;jj<params.randomMatrix[ii].length;jj++){
            innerInputColour.push("#FFFFFF");
        }
        inputColour.push(innerInputColour);
    }
    var findColoured=async ()=>{
        for(var i=0;i<8;i++){
            for(var j=0;j<8;j++){
                if(params.GlcmColour[i][j]!=="#FFFFFF"){
                    if(params.degreeValue===0){
                        for(var q=0;q<params.randomMatrix.length;q++){
                            for(var w=0;w<params.randomMatrix[q].length-params.distanceValue+1;w++){
                                console.log(params.randomMatrix[q][w]+"_"+j)
                                if(params.randomMatrix[q][w]===j+1&&params.randomMatrix[q][w+params.distanceValue-1]===i+1){
                                    console.log('Hi')
                                    inputColour[q][w]=params.GlcmColour[i][j];
                                    inputColour[q][w+params.distanceValue-1]=params.GlcmColour[i][j];                                    
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    findColoured().then(console.log(inputColour))
    return(
        <div id="input">
            <table style={{'margin':'20px'}}>
                <tbody>
                    {params.randomMatrix.map((item,index)=>{
                        return(
                            <tr key={index}>
                                {item.map((innerItem,innerIndex)=>{
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
    )
}

export default InputMatrix;