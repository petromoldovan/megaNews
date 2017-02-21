describe("Common", function(){
    describe("CRUD services", function(){
      var crudService;
      const expectedResponse = {"success": true};

      beforeEach(module("services.crud"));
      beforeEach(function(){
          inject(function($injector, $httpBackend){
              crudService = $injector.get('crudService')
          })
      });

      it("all calls return promises", function(){
        expect(crudService.getAnnouncements().then).toBeDefined();
        expect(crudService.getStories().then).toBeDefined();
        expect(crudService.getAllUserData().then).toBeDefined();
      })
    })
})
