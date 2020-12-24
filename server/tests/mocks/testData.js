const mockData = {
  signUpValid: {
    name: 'berry',
    email: 'neddybertin@gmail.com',
    password: '12345678',
  },
  query: {
    name: 'Bertin',
    email: 'neddybertin@gmail.com',
    message: 'hey test this',
  },
  signUpInvalid: {
    email: 'ail.com',
    password: 'c',
  },
  logInvalid: {
    email: 'neddybertin@gmail.com',
    password: '12345678',
  },
  loginInvalid: {
    email: 'ail.com',
    password: 'c',
  },
  blogsData: {
    title: 'testing Blog post',
    author: 'berry',
    content: 'Description',
  },
  Comment: {
    Name: 'john',
    Email: 'john@gmail.com',
    comment: 'this is blog comment',
  },
};
export default mockData;
