# CreateJS library module for Angular and Ionic

This is the createjs-0.8.2 collection.
***Now with typings!!!***

* EaselJS
* TweenJS
* SoundJS
* PreloadJS

You can find documentation at [CreateJS](http://blog.createjs.com/).



## Install

```bash
npm install createjs-module --save
```

**Angular**
```ts
import { Component, AfterViewInit } from '@angular/core';
import * as createjs from 'createjs-module';

@Component({
  selector: 'app-root',
  template: '<canvas width="500" height=500 id="demoCanvas"></canvas>'
})
export class AppComponent implements AfterViewInit {

  ngAfterViewInit() {
    var stage = new createjs.Stage("demoCanvas");
    var circle = new createjs.Shape();
    circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
    circle.x = 10;
    circle.y = 10;
    stage.addChild(circle);

    stage.update();

    createjs.Tween.get(circle, { loop: true })
    .to({ x: 400 }, 1000, createjs.Ease.getPowInOut(4))
    .to({ alpha: 0, y: 175 }, 500, createjs.Ease.getPowInOut(2))
    .to({ alpha: 0, y: 225 }, 100)
    .to({ alpha: 1, y: 200 }, 500, createjs.Ease.getPowInOut(2))
    .to({ x: 100 }, 800, createjs.Ease.getPowInOut(2));

    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);
  }

}
```

**Ionic**
```ts
import {Component} from '@angular/core';
import * as createjs from 'createjs-module';

@Component({
  selector: 'project-name-app',
  template: `
    <ion-content padding>
     <canvas width="500" height=500 id="demoCanvas"></canvas>
    </ion-content>
  `
})
export class MyApp {
  ionViewDidEnter() {
    var stage = new createjs.Stage("demoCanvas");
    var circle = new createjs.Shape();
    circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
    circle.x = 10;
    circle.y = 10;
    stage.addChild(circle);

    stage.update();

    createjs.Tween.get(circle, { loop: true })
    .to({ x: 400 }, 1000, createjs.Ease.getPowInOut(4))
    .to({ alpha: 0, y: 175 }, 500, createjs.Ease.getPowInOut(2))
    .to({ alpha: 0, y: 225 }, 100)
    .to({ alpha: 1, y: 200 }, 500, createjs.Ease.getPowInOut(2))
    .to({ x: 100 }, 800, createjs.Ease.getPowInOut(2));

    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);
  }
  
  constructor(){
  }
}
```

Credit Matt Balmer