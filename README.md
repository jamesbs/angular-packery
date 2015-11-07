# angular-packery
Angular directive as a light wrapper around [packery](http://packery.metafizzy.co/)


## Usage


_directives.js_
```javascript
app.directive('packery', require('angular-packery'));
```

_my-view.html_
```html
<packery options="{ itemSelector : '.packery-item', gutter : 6 }" loadOn="startPackery">
  <div class="packery-item">1</div>
  <div class="packery-item">2</div>
</packery>
```


_my-controller.js_
```javascript
$scope.$broadcast('startPackery'); // fire packery
```
