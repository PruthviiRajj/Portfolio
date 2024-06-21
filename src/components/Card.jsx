import React from 'react'
import '../css/card.css';

const Card = ({props,skills}) => {
  if(props.grades){
    return(
      <div>
      <div class="card" style={{width: "25rem",height:"15rem",borderColor:'#0DCAF0',borderWidth:'1px'}}>
          <div class="card-body">
              <h5 class="card-title">{props.title}</h5> 
              <p className='text-body-secondary fw-bold'>{props.branch}</p>
              <p className='text-body-secondary fw-bold'>GRADES : <span>{props.grades}</span></p>
              <p className='text-body-secondary'>{props.year}</p>
              <p className='fw-normal text-bold'>{props.discription}</p>
          </div>
      </div>
  </div> 
    )
  }else{
    return (
      <div>
          <div class="card" style={{width: "25rem",height:"15rem",borderColor:'#0DCAF0',borderWidth:'1px'}}>
              <div class="card-body">
                  <h5 class="card-title text-center fw-bold">{props.title}</h5>                            
  
                  {
                      skills.map((s)=> <button className='btn btn-outline-info m-2' >{s}</button>)
                  }
              </div>
          </div>
      </div>
    )
  }

  
}

export default Card