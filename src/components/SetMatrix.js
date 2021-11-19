var SetMatrix=(params)=>{
    return(
        <div className="mt-3 m-sm-5 border p-4 p-sm-5">
          <div className="row">
            <div className="col">
              <h2>Matrix Details</h2>
            </div>
          </div>
            <div className="row">
                <div className="col-12 col-sm-4">
                <div className="form-outline">
                    <input type="text" id="formRows" className="form-control" value={params.rows} onChange={params.customRows}/>
                    <label className="form-label" htmlFor="formRows">Rows</label>
                </div>
                </div>
                <div className="col-12 col-sm-4">
                <div className="form-outline">
                    <input type="text" id="formCols" className="form-control" value={params.cols} onChange={params.customCols}/>
                    <label className="form-label" htmlFor="formCols">Columns</label>
                </div>
                </div>
            <div className="col-12 col-sm-4">
              <div className="form-outline">
                <button onClick={()=>params.setMatrix()} className="btn btn-success align-self-start">Click to make Matrix</button>
              </div>
            </div>
          </div>
        </div>
    )
}

export default SetMatrix;