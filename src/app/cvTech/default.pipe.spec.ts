import { DefaultPipe } from './defaultimage.pipe';

describe('DefaultPipe', () => {
  it('create an instance', () => {
    const pipe = new DefaultPipe();
    expect(pipe).toBeTruthy();
  });
});
