import { DeferLoadDirective } from './defer-load.directive';

describe('DeferLoadDirective', () => {
  it('should create an instance', () => {
    const directive = new DeferLoadDirective(null, null);
    expect(directive).toBeTruthy();
  });
});
