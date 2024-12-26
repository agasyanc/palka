import { Watch } from "./watch";

export class Watcher {
  watches: Watch[] = [];

  watch(name:string, callback:Function){
    this.watches.push(new Watch(name, callback))
  }
  fire(name:string, value:any|null = null){
    this.watches.forEach((watch:Watch) => {
      if(watch.name === name){
        watch.callback(value);
      }
    })
  }
}