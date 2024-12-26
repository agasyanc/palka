import {Button} from './src/'

console.log('hello');

const btn = new Button();

btn.watch('click', () => {
  console.log('click');
});

btn.appentTo(document.body);