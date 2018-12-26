describe('collapse directive', function () {
  var element, compileFn, scope, $compile, $animate, $q;

  beforeEach(module('ui.bootstrap.collapse'));
  beforeEach(module('ngAnimateMock'));
  beforeEach(inject(function(_$rootScope_, _$compile_, _$animate_, _$q_) {
    scope = _$rootScope_;
    $compile = _$compile_;
    $animate = _$animate_;
    $q = _$q_;
  }));

  beforeEach(function() {
    element = angular.element(
      '<div uib-collapse="isCollapsed" '
        + 'expanding="expanding()" '
        + 'expanded="expanded()" '
        + 'collapsing="collapsing()" '
        + 'collapsed="collapsed()">'
      + 'Some Content</div>');
    compileFn = $compile(element);
    angular.element(document.body).append(element);
  });

  afterEach(function() {
    element.remove();
  });

  function initCallbacks() {
    scope.collapsing = jasmine.createSpy('scope.collapsing');
    scope.collapsed = jasmine.createSpy('scope.collapsed');
    scope.expanding = jasmine.createSpy('scope.expanding');
    scope.expanded = jasmine.createSpy('scope.expanded');
  }

  function assertCallbacks(expected) {
    ['collapsing', 'collapsed', 'expanding', 'expanded'].forEach(function(cbName) {
      if (expected[cbName]) {
        expect(scope[cbName]).toHaveBeenCalled();
      } else {
        expect(scope[cbName]).not.toHaveBeenCalled();
      }
    });
  }

  it('should be hidden on initialization if isCollapsed = true', function() {
    initCallbacks();
    scope.isCollapsed = true;
    compileFn(scope);
    scope.$digest();    
    expect(element.height()).toBe(0);
    assertCallbacks({ collapsed: true });
  });

  it('should not trigger any animation on initialization if isCollapsed = true', function() {
    var wrapperFn = function() {
      $animate.flush();
    };

    scope.isCollapsed = true;
    compileFn(scope);
    scope.$digest();

    expect(wrapperFn).toThrowError(/No pending animations ready to be closed or flushed/);
  });

});