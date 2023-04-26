const clubService = require('../../services/clubService');
const { createNewClub, updateOneClub } = require('../clubController');

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

describe('updateOneClub', () => {
  const mockRequest = (id, body) => ({
    params: { clubId: id },
    body,
  });

  const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    return res;
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should update club correctly', () => {
    const clubId = 'a282febe-82d6-49cc-bd9f-bde362c3a7d8';
    const body = {
      name: 'New name',
      shortName: 'NN',
      tla: 'CLB1',
      crestUrl: 'https://example.com/club-1.png',
      address: '123 Main St',
      phone: '555-1234',
      website: 'https://www.club1.com',
      email: 'info@club1.com',
      founded: 1900,
      clubColors: 'Red / White',
      venue: 'Stadium 1',
    };
    const req = mockRequest(clubId, body);
    const res = mockResponse();
    const expectedClub = {
      id: clubId,
      name: body.name,
      shortName: body.shortName,
      tla: body.tla,
      crestUrl: body.crestUrl,
      address: body.address,
      phone: body.phone,
      website: body.website,
      email: body.email,
      founded: body.founded,
      clubColors: body.clubColors,
      venue: body.venue,
      createdAt: expect.any(String),
      updatedAt: expect.any(String),
    };
    const spyUpdateOneClub = jest.spyOn(clubService, 'updateOneClub').mockReturnValue(expectedClub);

    updateOneClub(req, res);

    expect(spyUpdateOneClub).toHaveBeenCalledWith(clubId, body);
  });
});
