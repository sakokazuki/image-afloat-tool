import EventEmitter from 'wolfy87-eventemitter'


class ResizeDispacher extends EventEmitter{

  constructor(){
    super();
    this.resized = this.resized.bind(this);
    this.addWindowResizeEvent();
  }

  getSize(){
    return {width: window.innerWidth, height: window.innerHeight}
  }

  addWindowResizeEvent(){
    window.addEventListener("resize", this.resized);
  }

  removeWindowResizeEvent(){
    window.removeEventListener("resize", this.resized, false);
  }

  resized(){
    if (this.t !== false) {
      clearTimeout(this.t);
    }
    this.t = setTimeout(()=> {
       this.emit('resize', this.getSize());
    }, 200);
  }

}


export default new ResizeDispacher();
