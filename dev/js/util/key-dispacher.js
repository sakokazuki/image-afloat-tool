import EventEmitter from 'wolfy87-eventemitter'

class KeyDispacher extends EventEmitter{
  constructor(){
    super();
    this.onKeyDown = this.onKeyDown.bind(this);

    document.addEventListener("keydown" , this.onKeyDown);
  }

  onKeyDown(e){
    const key_code = e.keyCode;
    this.emit('key', String.fromCharCode(key_code));
  }
}


export default new KeyDispacher();
