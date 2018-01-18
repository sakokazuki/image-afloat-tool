import React from 'react'
import { connect } from 'react-redux'
import Image from './image'
import Control from './control'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';

import act from '../reducers/action'
import KeyDispacher from '../util/key-dispacher'
import * as Cookies from "js-cookie"

class App extends React.Component{

  componentWillMount(){
    this.onKeyDown = this.onKeyDown.bind(this);
    KeyDispacher.on('key', this.onKeyDown);
  }

  componentWillUnmount(){
    this.onKeyDown.off('key', this.onKeyDown);
  }

  onKeyDown(key){

    if(this.props.keyControl == false) return;
    const num = parseInt(key);
    //key == number -> change image
    if(isNaN(num) === false){
      if(num < this.props.config.imgsrc.length){
        this.props.handleChangeImage(num);
        this.props.handleMove(0, 0);
      }
      return;
    }

    let opacity = this.props.opacity;
    let posX = this.props.posX;
    let posY = this.props.posY;
    switch(key){
      case 'G': //hide/show tool
        this.props.handleShow();
        break;
      case 'A': //opacity--
        opacity = Math.max(0, opacity-0.05);
        this.props.handleOpacity(opacity);
        break;
      case 'S': //opacity++
        opacity = Math.min(1, opacity+0.05);
        this.props.handleOpacity(opacity);
        break;
      case 'H': //左
        posX = posX - 1;
        this.props.handleMove(posX, posY);
        break;
      case 'J': //下
        posY = posY + 1;
        this.props.handleMove(posX, posY);
        break;
      case 'K': //上
        posY = posY - 1;
        this.props.handleMove(posX, posY);
        break;
      case 'L': //右
        posX = posX + 1;
        this.props.handleMove(posX, posY);
        break;
      case 'R': //全リセット
        this.props.handleMove(0, 0);
        break;
      case 'T': //縦リセット
        this.props.handleMove(posX, 0);
        break;
      case 'Y': //横リセット
        this.props.handleMove(0, posY);
        break;
      case 'I': //show/hide gui
        this.props.handleShowGui();
        break;
      case 'P': //restore status
        this.props.handleRestoreStatus();
        break;
      case 'U': //enable key control
        this.props.handleKeyControl();
        break;
    }

  }

  render(){
    const style = {
      opacity:{
        opacity: this.props.opacity,
      },
      display:{
        display: this.props.show === true ? 'block' : 'none',
      }
    }

    const imageIndex = this.props.imageIndex;
    const imageSrc = this.props.config.imgsrc[imageIndex];
    // console.log('show:', this.props.show, "showGUI:", this.props.showGui, "key", this.props.keyControl);
    return (
      <div className="web-tools-inner" style={style.display}>
        <MuiThemeProvider>
          <Control {...this.props}/>
        </MuiThemeProvider>
        <div className="imageboard" style={style.opacity}>
          <Image src={imageSrc}
            handleMove={this.props.handleMove}
            posX = {this.props.posX}
            posY = {this.props.posY}
          />
        </div>
      </div>
    )
  }
}

App.propTypes = {
  config: PropTypes.object.isRequired,
};

const mapStateToProps = (state)=> {
  Cookies.set('state', state, { expires: 7 });
  return state
}

const mapDispatchToProps = (dispatch)=> {
  return {
    handleMove: (x, y)=> {dispatch(act.move(x, y))},
    handleShow: ()=> {dispatch(act.show())},
    handleShowGui: ()=> {dispatch(act.showGui())},
    handleKeyControl: ()=> {dispatch(act.keyControl())},
    handleRestoreStatus: ()=> {dispatch(act.restoreStatus())},
    handleOpacity: (value)=> {dispatch(act.setOpacity(value))},
    handleChangeImage: (index)=> {dispatch(act.changeImage(index))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
