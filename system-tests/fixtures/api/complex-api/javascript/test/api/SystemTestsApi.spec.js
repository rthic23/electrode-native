/*
 * Complex Api
 * Test schema to demonstrate ComplexAPI
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * Do not edit the class manually.
 */

import SystemTestsRequests from '../../src/api/SystemTestsRequests';

describe('SystemTestsApi', function () {
  let requests;
  beforeEach(function () {
    let requestHandler;
    requests = new SystemTestsRequests({
      registerRequestHandler(name, handler) {
        requestHandler = handler;
      },
      sendRequest(name, data) {
        requestHandler && requestHandler(data);
        return Promise.resolve(data);
      },
    });
  });

  describe('testArrayOfStrings', () => {
    it('sends "testArrayOfStrings" request', () => {
      return requests.testArrayOfStrings('id').then(response => {
        expect(response).toEqual({data: 'id', timeout: undefined});
      });
    });
  });

  describe('testMultiArgs', () => {
    it('sends "testMultiArgs" request', () => {
      return requests.testMultiArgs('id').then(response => {
        expect(response).toEqual({data: 'id', timeout: undefined});
      });
    });
  });
});
