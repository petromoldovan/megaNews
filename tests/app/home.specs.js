describe("Home module", function() {
    var viewHtml, homeElement

    beforeEach(module('app.home'))

    beforeEach(inject(function($templateCache) {
        viewHtml = $templateCache.get('/index.html');
    }));

    beforeEach(inject(function(_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $rootScope.isOn = false;
        homeElement = angular.element(viewHtml);
        var element = $compile(homeElement)($rootScope);
        $rootScope.$digest();
    }));

    it('should show the div', function () {
        var div = homeElement.find('div');
        expect(div.css('display')).toBe('none');
    });
})
