import { TestBed, inject } from '@angular/core/testing';

import { TimelineService } from './timeline.service';

describe('TimelineService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TimelineService]
        });
    });

    it('should create service', inject([TimelineService], (service: TimelineService) => {
        expect(service).toBeTruthy();
    }));

  /*
  it('should return 42 from getMeaning', inject([LibService], (service: LibService) => {
      expect(service.getMeaning()).toBe(42);
  }));
  */
});
