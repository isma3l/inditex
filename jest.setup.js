import { jest } from '@jest/globals';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => jest.fn(),
  }));