import act from './actions'
import * as Cookies from "js-cookie"

const initialState = {
  opacity: 0.8,
  posX: 0,
  posY: 0,
  show: true,
  showGui: true,
  keyControl: true,
  restoreStatus: true,
  imageIndex: 0,
}

const getInitState = (state)=>{
  if(state.restoreStatus == false){
    return initialState
  }

  if(!Cookies.get('state')){
    return initialState
  }else{
    return JSON.parse(Cookies.get('state'))
  }
}


const reducer = (state = initialState, action)=>{
  let bKey, bGui, bShow;
  switch(action.type) {
    case act.MOVE:
      const x = Math.round(action.posX*1000)/1000
      const y = Math.round(action.posY*1000)/1000
      return { ...state, posX: x, posY: y}
    case act.OPACITY:
      const opacity = Math.round(action.opacity*1000)/1000
      return { ...state, opacity: opacity}
    case act.SHOW:
      bShow = !state.show
      bKey = state.keyControl;
      if(bShow == false) bKey = true;
      return { ...state, keyControl: bKey, show: bShow}
    case act.SHOW_GUI:
      bGui = !state.showGui
      bKey = state.keyControl;
      if(bGui == false) bKey = true;
      return { ...state, keyControl: bKey, showGui: bGui}
    case act.KEY_CONTROL:
      //キーを使えなくするならGUIは常に表示
      bKey = !state.keyControl;
      bGui = state.showGui;
      if(bKey == false) bGui = true;
      return { ...state, keyControl: bKey, showGui: bGui}
    case act.RESTORE_STATUS:
      return { ...state, restoreStatus: !state.restoreStatus}
    case act.CHANGE_IMAGE:
      return { ...state, imageIndex: action.index}

    default:
      return getInitState(state);
  }

}


export default reducer;
