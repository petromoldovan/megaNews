const mockAnnouncements = [
    {
        "id":1,
        "day":"06",
        "month":"october",
        "year":"2016",
        "time":"10:00 till 16:00",
        "event":"Workshop for newly appointed heads",
        "place":"Studio 1",
        "pic":"assets/img/newsImg1.jpg",
        "text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popular"
    },
    {
        "id":2,
        "day":"07",
        "month":"october",
        "year":"2016",
        "time":"16:00",
        "event":"Parent's day celebration",
        "place":"Hall 3c",
        "pic":"assets/img/newsImg2.png",
        "text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popular"
    }
];

const mockStories = [
    {
        "id":1,
        "topic":"Kultur",
        "header":"8 things this mom will do in 2016 to set a better example",
        "content":"We don’t just learn from words and actions. We also learn from silence and inaction. Those lessons are scarier than the ones we actively teach our kids...",
        "pic":"assets/img/newsImg1.jpg"

    },
    {
        "id":2,
        "topic":"History",
        "header":"Clean your drawers on New Year’s Day",
        "content":"Dear Readers: Happy new year, and I wish you and yours (pets included) a good year! It’s a good day to relax and take some time off, or clean out a kitchen drawer! There is something rewarding about...",
        "pic":"assets/img/newsImg2.png"
    },
    {
        "id":3,
        "topic":"History",
        "header":"Mark your calendar with these odd or silly holidays",
        "content":"Roll in the mud, remember to forget and do something to make someone smile",
        "pic":"assets/img/newsImg3.png"
    }
]


describe("Home module", function() {
    angular.module('ui.bootstrap', []);
    angular.module('xeditable', []);

    beforeEach(module('app.home'))

    var HomeCtrl, scope, crudService;
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        HomeCtrl = $controller('homeCtrl', {
            $scope: scope
        })
    }));

    describe("service calls should load data", function() {
        beforeEach(inject(function($injector, $httpBackend){
            //mock calls done by service. Required when doing scope.$digest below
            $httpBackend.when('GET', 'assets/data/announcements.json').respond(mockAnnouncements);
            $httpBackend.when('GET', 'assets/data/stories.json').respond(mockStories);

            // causes the http requests which will be issued by service to be completed synchronously, and thus will process the fake response we defined above with the $httpBackend GET
            $httpBackend.flush();

            crudService = $injector.get('crudService')
        }));
        it("must return a promise", function() {
            expect(crudService.getStories().then).toBeDefined();
        });
        it('check initial number of stories', function () {
            expect(scope.stories.length).toBe(3);
        });
        it('stories contain correct data', function () {
            expect(scope.stories[0].id).toEqual(1);
            expect(scope.stories[2].topic).toEqual("History");
        });
        it("must return a promise", function() {
            expect(crudService.getAnnouncements().then).toBeDefined();
        });
        it('check initial number of announcements', function () {
            expect(scope.announcements.length).toBe(2);
        });
        it('announcements contain correct data', function () {
            expect(scope.announcements[1].month).toEqual("october");
            expect(scope.announcements[0].event).toEqual("Workshop for newly appointed heads");
        });
    });

    describe("test concatAll function", function() {
        it("return expected value", function() {
            var stringsArr = ['some', 'random', 'dude'];
            var result = scope.concatAll(stringsArr)
            expect(result).toBe('some random dude')
        })
    })
})
