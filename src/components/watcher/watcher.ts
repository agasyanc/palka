export class Watcher<EventMap>{
  watches: Watch<EventMap>[] = [];

  watch<K extends keyof EventMap>(name:K, callback:(value: EventMap[K])=>void){
    this.watches.push(new Watch(name, callback))
  }
  fire<K extends keyof EventMap>(name:K, value:EventMap[K]|null = null){
    this.watches.forEach((watch:Watch<EventMap>) => {
      if(watch.name === name){
        watch.callback(value);
      }
    })
  }
}

class Watch<EventMap> {
  constructor(public name:keyof EventMap, public callback:Function) {
    
  }
}