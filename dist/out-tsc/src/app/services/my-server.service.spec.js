import { TestBed } from '@angular/core/testing';
import { MyServerService } from './my-server.service';
describe('MyServerService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(MyServerService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=my-server.service.spec.js.map