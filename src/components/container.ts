import { Watcher } from "./watcher/watcher";

interface ContainerEventMap {

}

export class Container<EventMap> extends Watcher<EventMap>{
  container:HTMLElement = document.createElement('div');
  constructor(public name:string){
    super();
    this.container.className = name

  }
  appentTo(container:HTMLElement){
    container.appendChild(this.container)
  }
}