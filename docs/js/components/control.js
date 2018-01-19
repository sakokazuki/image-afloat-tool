import React from 'react'
import PropTypes from 'prop-types';
import Checkbox from 'material-ui/Checkbox';
import Slider from 'material-ui/Slider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import ResizeDispacher from '../util/resize-dispacher'



class Control extends React.Component{
  componentWillMount(){
    this.handleWindowResize = this.handleWindowResize.bind(this);
    ResizeDispacher.on('resize', this.handleWindowResize);


    this.setState({
      maxWidth: ResizeDispacher.getSize().width,
      minWidth: -9999999999999999999,
      maxHeight: ResizeDispacher.getSize().height,
      minHeight: -9999999999999999999,
    });

    this.setImageSize(this.props);

    this.sliderStyle = {'marginTop':'5px', 'marginBottom':'5px'}
  }

  componentWillUnmount(){
    this.handleWindowResize.off('resize', this.handleWindowResize);
  }

  componentWillReceiveProps(nextprops){
    if(this.props.imageIndex != nextprops.imageIndex)
      this.setImageSize(nextprops);
  }

  handleWindowResize(v){
    this.setState({
      maxWidth: v.width,
      maxHeight: v.height,
    });
  }

  createImageMenu(src){
    let menulist = [];
    for(let i=0; i<src.length; i++){
      const v = src[i];
      menulist.push(<MenuItem value={i} primaryText={v} key={v}/>)
    }
    return menulist;
  }

  setImageSize(nextprops){
    const src = nextprops.config.imgsrc[nextprops.imageIndex];
    let img = new Image();
    img.src = src;
    img.onload = ()=>{
      this.setState({
        minWidth: -1*img.width,
        minHeight: -1*img.height
      })
    }
  }

  render(){
    const showStyle = {display: this.props.showGui === true ? 'block' : 'none'}
    const menulist = this.createImageMenu(this.props.config.imgsrc);

    return (
      <div className="control" style={showStyle}>

        <Checkbox
          label="HIDE ALL (show 'G')"
          checked={this.props.show}
          onClick={this.props.handleShow}
        />

        <div className="space"/>
        <Checkbox
          label="HIDE CONTROL (show 'I')"
          checked={this.props.showGui}
          onClick={this.props.handleShowGui}
        />
        <div className="space"/>

        <Checkbox
          label="KEY CONTROL (show 'U')"
          checked={this.props.keyControl}
          onClick={this.props.handleKeyControl}
        />
        <div className="space"/>

        <p>IMAGE POS X : <span>{this.props.posX}</span></p>
        <Slider value={this.props.posX}
                onChange={(e, v)=>this.props.handleMove(v, this.props.posY)}
                sliderStyle={this.sliderStyle}
                min={this.state.minWidth}
                max={this.state.maxWidth}/>
        <div className="space"/>

        <p>IMAGE POS Y : <span>{this.props.posY}</span></p>
        <Slider value={this.props.posY}
                onChange={(e, v)=>this.props.handleMove(this.props.posX, v)}
                sliderStyle={this.sliderStyle}
                min={this.state.minHeight}
                max={this.state.maxHeight}/>
        <div className="space"/>

        <p>IMAGE OPACITY : <span>{this.props.opacity}</span></p>
        <Slider value={this.props.opacity}
                onChange={(e, v)=>this.props.handleOpacity(v)}
                sliderStyle={this.sliderStyle}
                min={0.0}
                max={1.0}/>
        <div className="space"/>

        <p>IMAGE SRC</p>
        <DropDownMenu
            value={this.props.imageIndex}
            onChange={(e, i, v)=>{
              this.props.handleChangeImage(i);
              this.props.handleMove(0, 0);
            }}
            autoWidth={false}
            style={{width: 250}}>
          {menulist}
        </DropDownMenu>
      </div>
    )
  }
}


export default Control
