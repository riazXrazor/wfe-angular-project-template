import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User('user1', 'password', 'admin', 'hgfvbf775fvcvb')).toBeTruthy();
  });
});
