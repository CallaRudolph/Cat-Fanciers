import { CatsPipe } from './cats.pipe';

describe('CatsPipe', () => {
  it('create an instance', () => {
    const pipe = new CatsPipe();
    expect(pipe).toBeTruthy();
  });
});
