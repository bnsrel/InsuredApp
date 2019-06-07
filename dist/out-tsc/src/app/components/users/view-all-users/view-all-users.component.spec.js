import { async, TestBed } from '@angular/core/testing';
import { ViewAllUsersComponent } from './view-all-users.component';
describe('ViewAllUsersComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ViewAllUsersComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ViewAllUsersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=view-all-users.component.spec.js.map