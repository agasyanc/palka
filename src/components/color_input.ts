import '../styles/color_input.css'
import { Container } from "./container";
import { Input } from "./input";

interface ColorInputEventMap {
  'input': string;
}

export class ColorInput extends Container<ColorInputEventMap>{
  constructor(public color:string){
    super('color-input')
    const el = document.createElement('div')
    el.className = this.name + '__preview'
    el.style.backgroundColor = color

    el.onclick = () => {

    }

    const hue_stripe = document.createElement('canvas')
    hue_stripe.className = this.name + '__hue-stripe'
    hue_stripe.width = 720
    hue_stripe.height = 100
    const ctx = hue_stripe.getContext('2d')
    for (let i = 0; i < 720; i++){
      ctx!.fillStyle = `hsl(${i / 720 * 360}, 100%, 50%)`
      ctx!.fillRect(i, 0, 1, 100)
    }

    hue_stripe.onpointermove = (event:PointerEvent) => {
      const x = hue_stripe.getBoundingClientRect().left
      const y = hue_stripe.getBoundingClientRect().top
      const hue = Math.round((event.clientX - x) / hue_stripe.width * 360)
      const saturation = Math.round((event.clientY - y) / hue_stripe.height * 100)
      el.style.backgroundColor = `hsl(${hue}, ${saturation}%, 50%)`
      this.fire('input', `hsl(${hue}, ${saturation}%, 50%)`)
    }

    
    this.container.appendChild(hue_stripe)

    this.container.appendChild(el)
  }
}