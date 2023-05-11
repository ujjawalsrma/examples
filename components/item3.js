import { useSelector , useDispatch } from 'react-redux';
import { buyCake } from '../redux/cake-action'
let Item3 = () => {

    const noOfCakes = useSelector(state => state.noOfCakes)
    const dispatch = useDispatch()
    return(
        <>
        <div className="flex justify-around items-baseline">
        <div className="" >cakes no {noOfCakes}</div>
        <button className="btn btn-secondary " onClick={()=>dispatch(buyCake())}>add</button>
        </div>
        </>
    );

}

  

export default Item3