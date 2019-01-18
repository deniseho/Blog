import { PostsPipe } from './posts-pipe.pipe';

describe('PostsPipePipe', () => {
  it('create an instance', () => {
    const pipe = new PostsPipe();
    expect(pipe).toBeTruthy();
  });
});
