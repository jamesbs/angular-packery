# angular-packery
Angular directive as a light wrapper around [packery](http://packery.metafizzy.co/)


## Usage


```javascript:directives.js

app.directive('packery', require('angular-packery'));
```

```html:my-view.html

<packery options="{ itemSelector : '.packery-item', gutter : 6 }" loadOn="startPackery">
  <div class="packery-item">1</div>
  <div class="packery-item">2</div>
</packery>
```

```javascript:my-controller.js

$scope.$broadcast('startPackery'); // fire packery
```
