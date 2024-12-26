import {Button, ColorInput, Input} from './src/'

console.log('hello');

const btn = new Button();

btn.watch('click', () => {
  console.log('click');
});

btn.appentTo(document.body);

const input = new Input()

input.watch('input', (value) => {
  console.log(value);
})

input.appentTo(document.body)

const color_input = new ColorInput('#aa3943')

color_input.watch('input', (value) => {
  console.log(value);
})

color_input.appentTo(document.body)