import { Component } from '@angular/core';

@Component({
  selector: 'app-auto-complete',
  imports: [],
  templateUrl: './auto-complete.html',
  styleUrl: './auto-complete.css',
})
export class AutoComplete {

  autocorrectMapping: Record<string, string> = {
    "wierd": "weird",
    "recieve": "receive"
  }

  autocomplete(event:Event){
    let ele = event.target as HTMLTextAreaElement
    let text = ele.value

    if(text[text.length-1] == " ")
    {
      let txtArray = text.split(" ")
      let lastWord = txtArray[txtArray.length-2]

      if(Object.hasOwn(this.autocorrectMapping, lastWord)){
        lastWord = this.autocorrectMapping[lastWord]
      }

      txtArray[txtArray.length-2] = lastWord ;
      text = txtArray.join(" ");
      
      ele.value = text
    }
  }
}
