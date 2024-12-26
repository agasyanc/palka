import '../styles/button.css'
import { Watcher } from './watcher/watcher';

export class Button extends Watcher {
  el:HTMLElement;
  constructor(){
    super();
    const el = document.createElement('button');
    el.className = 'button'
    el.innerHTML = 'Button'
    el.onclick = () => { this.fire('click') }
    this.el = el;
  }
  appentTo(container:HTMLElement){
    container.appendChild(this.el)
  }
}