import act from './actions'

export default {
  move: (x, y)=>{
    return {
      type: act.MOVE,
      posX: x,
      posY: y,
    }
  },
  setOpacity: (a)=>{
    return {
      type: act.OPACITY,
      opacity: a,
    }
  },
  show: ()=>{return {type: act.SHOW}},
  keyControl: ()=>{return {type: act.KEY_CONTROL}},
  showGui: ()=>{return {type: act.SHOW_GUI}},
  restoreStatus: ()=>{return {type: act.RESTORE_STATUS}},
  changeImage: (index)=>{
    return {
      type: act.CHANGE_IMAGE,
      index: index,
    }
  },
}
