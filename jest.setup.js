
jest.mock('react-router-dom', () => {
  const module = jest.requireActual('react-router-dom');
  
  return {
    ...module,
    useParams: jest.fn()
  }
});
