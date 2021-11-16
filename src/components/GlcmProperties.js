import { Basic } from 'react-dial-knob';

var GlcmProperties=(params)=>{
    return(
        <div className="mt-3 m-sm-5 border p-4 p-sm-5">
          <div className="row">
            <div className="col">
              <h2>GLCM Properties</h2>
            </div>
          </div>
          <div className="row">
            <div className='col-4' align='center'>
              <div>
                <Basic diameter={100} min={0} max={135} step={45} value={params.dialValue}
                  theme={{
                      defaultColor: '#333',
                      activeColor: '#f33'
                  }}
                  onValueChange={params.setDialValue} ariaLabelledBy={'dial-label'}
                >
                    <label id={'dial-label'}>Degree</label>
                </Basic>
              </div>
            </div>
          </div>
        </div>
    )
}

export default GlcmProperties;