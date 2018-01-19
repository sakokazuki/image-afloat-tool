import React from 'react'
import PropTypes from 'prop-types';

class Image extends React.Component{

  render(){
    const { src } = this.props
    const style = {
      transform: `translate3d(${this.props.posX}px, ${this.props.posY}px, 0)`
    }
    return (

      <img  onDragEnter={this.onDragStart.bind(this)}
            onDragOver={this.onDrag.bind(this)}
            onDragLeave={this.onDragEnd.bind(this)}
            src={src}
            style={style}
      />
    )
  }

  onDragStart(e){
    // console.log(this.props.posX, this.props.posY)
    this.x = e.pageX - this.props.posX;
    this.y = e.pageY - this.props.posY;

  }
  onDrag(e){
    const x = e.pageX-this.x;
    const y = e.pageY-this.y;
    this.props.handleMove(x, y);
  }
  onDragEnd(e){
  }
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  posX: PropTypes.number.isRequired,
  posY: PropTypes.number.isRequired,
  handleMove: PropTypes.func.isRequired,
};


export default Image
