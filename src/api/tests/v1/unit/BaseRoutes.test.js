import app from '../../../index';
import request from 'supertest';

describe('GET /v1/status', () => {
  it("returns w/ 200 'OK' status", (done) => {
    request(app)
      .get('/v1/status')
      .expect(res => {
        if('OK'.indexOf(res.text)) throw new Error("res.text != 'OK'");
      })
      .expect(200, done);
  });
});

describe('GET /', () => {
  it("retuns text 'Hello world'", (done) => {
    request(app)
      .get('/')
      .expect(res => {
        if('Hello world'.indexOf(res.text)) throw new Error("res.text != 'Hello world'");
      })
      .expect(200, done);
  });
});