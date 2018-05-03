import React from 'react';
import './portfolioStyle.css'

const part2 = (Props) => {

    return(

      
<div className='port m'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='data'>
                            <div className='dots'>
                                <span className='d1'></span>
                                <span className='d2'></span>
                                <span className='d3'></span>
                            </div>
                            <h2>WAM</h2>
                            <p>
We have been proudly selected as the appointed company by the official news agency in UAE (WAM) to develop and revamp their online presence. Through the entire project process, our teams were tightly integrated to understand the WAM’s needs, identify workflow constraints and requirements, and harmonize our designs into new and developing storytelling formats. Working closely with the WAM different teams, there was a smooth transition from design into development, shaping and optimizing our final deliverables to meet their needs and process. 
                            </p>
                            <button className='btn btn-danger'>Website</button>
                            <button className='btn btn-defualt sec'>Mobile App</button>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <img src={ require('../images/two.png')}/>
                        <img className='mobile' src={require('../images/mobile.png')}/>
                        <img className='watch' src={require('../images/watch.png')}/>
                    </div>
                </div>
            </div>
        </div>

    )
};
export default part2;