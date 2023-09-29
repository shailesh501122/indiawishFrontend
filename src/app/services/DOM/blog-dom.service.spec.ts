import { TestBed } from '@angular/core/testing';

import { BlogDomService } from './blog-dom.service';

describe('BlogDomService', () => {
  let service: BlogDomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogDomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
