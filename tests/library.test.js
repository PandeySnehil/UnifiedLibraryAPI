const request = require('supertest');
const app = require('../index');

describe('Unified Library API', () => {

  it('GET / should return welcome HTML', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Welcome to the Unified Library API');
  });

  it('GET /books/fantasy should return 200 or 404', async () => {
    const res = await request(app).get('/books/fantasy');
    expect([200, 404]).toContain(res.statusCode);
  });

  it('POST /books/fantasy should add a new book', async () => {
    const res = await request(app)
      .post('/books/fantasy')
      .send({ title: "Test Book", author: "Test Author" });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.title).toBe("Test Book");
  });

  it('POST /books/fantasy with missing title should return 400', async () => {
    const res = await request(app)
      .post('/books/fantasy')
      .send({ author: "Author Without Title" });

    expect(res.statusCode).toBe(400);
  });

  it('GET /invalidtype/invalidgenre should return 404', async () => {
    const res = await request(app).get('/invalidtype/invalidgenre');
    expect(res.statusCode).toBe(404);
  });

  it('DELETE /books/fantasy/:id should delete the book', async () => {
    // First, add a book
    const postRes = await request(app)
      .post('/books/fantasy')
      .send({ title: "Book to Delete", author: "Author" });

    const id = postRes.body.id;

    // Then, delete it
    const deleteRes = await request(app).delete(`/books/fantasy/${id}`);
    expect(deleteRes.statusCode).toBe(200);
    expect(deleteRes.text).toBe('Item deleted.');
  });

  it('DELETE /books/fantasy/:id with invalid id should return 404', async () => {
    const res = await request(app).delete('/books/fantasy/999999999');
    expect(res.statusCode).toBe(404);
  });

});
