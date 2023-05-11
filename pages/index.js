import { connect } from 'react-redux'
import { buyCake } from '../redux/cake-action'
import Item3 from '@/components/item3'
 

let com1 = (props) => {
  return(<>
    <div className="flex justify-around items-baseline">
    <div className="" >cakes no {props.noOfCakes}</div>
    <button className="btn btn-primary " onClick={props.buyCake}>add</button>
    
    </div>
    <div><Item3/></div>

  
    </>
  )
}

const mapStateToProps = (state) => {
  return{
    noOfCakes: state.noOfCakes
  }
}

const mapDispatchtoProps = (dispatch) => {
  return{
    buyCake: () => dispatch(buyCake())
  }
}



export default connect(mapStateToProps, mapDispatchtoProps)(com1)

// export default com1;

