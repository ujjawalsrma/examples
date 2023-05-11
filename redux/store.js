import { legacy_createStore as createStore} from 'redux'

import cakeReducer from './cake-reducer'
const store = createStore(cakeReducer)
export default store
