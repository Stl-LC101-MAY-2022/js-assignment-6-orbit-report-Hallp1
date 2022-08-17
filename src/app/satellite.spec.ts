import { Satellite } from './satellite';

describe('Satellite', () => {
  let satellite: Satellite;
  beforeEach(() => {
    satellite = new Satellite("foo", "bar", "baz", "lur", false);
  });

  afterEach(() => {
	  satellite = null;
  });

  it('should create an instance', () => {
    expect(satellite).toBeTruthy();
  });


 
});
