import { FilterByCourseIdPipe } from './filter-by-course-id.pipe';

describe('FilterByCourseIdPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterByCourseIdPipe();
    expect(pipe).toBeTruthy();
  });
});
