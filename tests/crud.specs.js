describe("Common", function(){
    describe("CRUD services", function(){
      var crudService;
      beforeEach(module("services.crud"));
      beforeEach(function(){
          inject(function($injector){
              crudService = $injector.get('crudService')
          })
      });

      it("getAnnouncements to return all announcements", function(){
        crudService.getAnnouncements()
            .then(function(res){
                expect(res.length).toBe(8)
              }
            );
      });

      it("getAnnouncements returns a promise", function(){
          var result = crudService.getAnnouncements();

          if(angular.isObject(result) &&
              result.success instanceof Function &&
              result.error instanceof Function) {
            expect(result).toBeDefined();
          }
      })

    })
})
