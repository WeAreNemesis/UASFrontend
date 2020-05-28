import { FilterByApplicantIdPipe } from './filter-by-applicant-id.pipe';

describe('FilterByApplicantIdPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterByApplicantIdPipe();
    expect(pipe).toBeTruthy();
  });
});
