const clubService = require('../../services/clubService');
const { createNewClub } = require('../clubController');

jest.mock('../../services/clubService');

describe('createNewClub', () => {
  test('should create a new club and return a 201 status code', () => {
    const mockReq = {
      body: {
        name: 'Test Club',
        tla: 'TST',
        crestUrl: 'http://test.com/club',
        clubColors: 'red, white',
        venue: 'Test Stadium',
      },
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
    const mockCreatedClub = {
      id: 1,
      ...mockReq.body,
    };
    clubService.createNewClub.mockReturnValueOnce(mockCreatedClub);

    createNewClub(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(201);
    expect(mockRes.send).toHaveBeenCalledWith({ status: 'OK', data: mockCreatedClub });
    expect(clubService.createNewClub).toHaveBeenCalledWith(mockReq.body);
  });
});
