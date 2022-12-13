

export const Flag = (props) => {
  return(
    <div className="flag" id={props.id} style={{backgroundImage:`url(${props.bandeira})`, backgroundSize: 'cover', backgroundPositionX: '50%'}}>
      <div className='flagRound'>
      </div>
    </div>
  )
}