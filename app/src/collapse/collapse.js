angular.module('ui.bootstrap.collapse', [])
  .directive('uibCollapse', uibCollapseDirective);

  uibCollapseDirective.$inject = ['$animate', '$q', '$parse', '$injector'];
function uibCollapseDirective($animate, $q, $pares, $injector) {
  var $animateCss = $injector.has('$animateCss') ? $injector.get('$animateCss') : null;
  return {
    link: function (scope, element, attrs) {
      console.log({element});
      var expandingExpr = $parse(attrs.expanding);
    }
  };
}  