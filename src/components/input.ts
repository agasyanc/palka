import { Container } from "./container";

interface InputEventMap {
  'input': string;
}

export class Input extends Container<InputEventMap>{
  el:HTMLElement

  constructor() {
    super('input')
    const el = document.createElement('input')

    el.oninput = (e) => {
      this.fire('input', el.value)
    }

    this.el = el;
  }
  appentTo(container:HTMLElement){
    container.appendChild(this.el)
  }
}