
const request = require('supertest');
const {assert} = require('chai');
const app = require('../app');

//==================== API tests ====================


describe('API Tests', () => {
    describe('Managerial get all functions', () => {
        describe('GET /ORDER data', () => {
            it('responds with array of order data', async () => {
                const response = await request(app)
                    .get('/api/orders')
                    .set('Accept', 'application/json');
                assert.equal(response.status, 200);
                assert.equal(Array.isArray(response.body), true);
                })
        })
        describe('GET /INVENTORY data', () => {
            it('responds with array of inventory data', async () => {
                const response = await request(app)
                    .get('/api/inventory')
                    .set('Accept', 'application/json');
                assert.equal(response.status, 200);
                assert.equal(Array.isArray(response.body), true);
            })
        })
    })  // end of managerial function tests

    describe('Tests for /GAMES', () => {
        it('GET/GAMES Retrieves an array of objects', async () => {
            const response = await request(app)
                .get('/api/games')
                .set('Accept', 'application/json');
            assert.equal(response.status, 200);
            assert.isArray(response.body, true);
            // console.log(response.body[response.body.length-1].game_id)
            assert.equal(Number.isInteger(response.body[response.body.length-1].game_id), true )
            })
        it('GET/GAMES/:ID Retrieves a game object', async () => {
            const sampleID = Math.ceil(Math.random()*5);    //Currently accesses 1-5
            
            const response = await request(app)
                .get(`/api/games/${sampleID}`)
                .set('Accept', 'application/json');
            assert.equal(response.status, 200);
            assert.equal(response.body.game_id, sampleID);  // Expect returned object to have game_id of sampleID
            assert.isString(response.body.title, true);
            })
    })  // End of /GAMES tests

    describe('Tests for /INVENTORY', () => {
        it('GET/INVENTORY/GAME/:ID Retrieves an array of inventory objects relating to gameID', async () => {
            const sampleID = Math.ceil(Math.random()*5);    //Currently accesses 1-5
            
            const response = await request(app)
                .get(`/api/inventory/game/${sampleID}`)
                .set('Accept', 'application/json');
            assert.equal(response.status, 200);
            assert.equal(response.body[0].game_id, sampleID);  // Expect returned object to have game_id of sampleID
            assert.isString(response.body[0].title, true);
            assert.isArray(response.body, true);
            })
    
    //! Test to be created
    //    it('PUT/INVENTORY/:ID Updates an object relating to inventory_ID', async () => {
    //         const response = await request(app)
    //             .get(`/api/inventory/game/${sampleID}`)
    //             .set('Accept', 'application/json');
    //         }) 

    })  // End of /INVENTORY tests

    describe('Tests for /USERS', () => {
        it('GET/USERS/:ID Retrieves a user object', async () => {
            const sampleID = Math.ceil(Math.random()*5);    //Currently accesses 1-5
            
            const response = await request(app)
                .get(`/api/users/${sampleID}`)
                .set('Accept', 'application/json');
            assert.equal(response.status, 200);
            assert.equal(response.body.user_id, sampleID);  // Expect returned object to have user_id of sampleID
            assert.isString(response.body.firstname, true);
            })
    //
    //! Tests to be created:
    //? PUT/USERS/:ID Amends a single user
    //? POST/USERS/NEW Creates a new user

    })  // End of /USERS tests

    describe('Tests for /ORDERS', () => {
        it('GET/ORDERS/:ID Retrieves an objects relating to order_ID', async () => {
            const sampleID = Math.ceil(Math.random()*5);    //Currently accesses 1-5
            
            const response = await request(app)
                .get(`/api/orders/${sampleID}`)
                .set('Accept', 'application/json');
            assert.equal(response.status, 200);
            assert.equal(response.body.order_id, sampleID);  // Expect returned object to have order_id of sampleID
            })
        it('GET/ORDERS/USER/:ID Retrieves an objects relating to user_ID', async () => {
                const sampleID = Math.ceil(Math.random()*5);    //Currently accesses 1-5
                
                const response = await request(app)
                    .get(`/api/orders/user/${sampleID}`)
                    .set('Accept', 'application/json');
                assert.equal(response.status, 200);
                assert.isArray(response.body, true);
                })
            
    //! Tests to be created:
    //? POST/ORDERS/NEW Creates a new order

    })  // End of /ORDER tests


});


/**
 * Testing get a user endpoint by giving an existing user
 */
// describe('GET /user/:id', function () {
//     it('respond with json containing a single user', function (done) {
//         request(app)
//             .get('/users/U001')
//             .set('Accept', 'application/json')
//             .expect('Content-Type', /json/)
//             .expect(200, done);
//     });
// });

/**
 * Testing get a user endpoint by giving a non-existing user
 */
// describe('GET /user/:id', function () {
//     it('respond with json user not found', function (done) {
//         request(app)
//             .get('/users/idisnonexisting')
//             .set('Accept', 'application/json')
//             .expect('Content-Type', /json/)
//             .expect(404) //expecting HTTP status code
//             .expect('"user not found"') // expecting content value
//             .end((err) => {
//                 if (err) return done(err);
//                 done();
//             });
//     });
// });

/**
 * Testing post user endpoint
 */
// describe('POST /users', function () {
//     let data = {
//         "id": "1",
//         "name": "dummy",
//         "contact": "dummy",
//         "address": "dummy"
//     }
//     it('respond with 201 created', function (done) {
//         request(app)
//             .post('/users')
//             .send(data)
//             .set('Accept', 'application/json')
//             .expect('Content-Type', /json/)
//             .expect(201)
//             .end((err) => {
//                 if (err) return done(err);
//                 done();
//             });
//     });
// });

/**
 * Testing post user endpoint
 */

// describe('POST /users', function () {
//     let data = {
//         //no id
//         "name": "dummy",
//         "contact": "dummy",
//         "address": "dummy"
//     }
//     it('respond with 400 not created', function (done) {
//         request(app)
//             .post('/users')
//             .send(data)
//             .set('Accept', 'application/json')
//             .expect('Content-Type', /json/)
//             .expect(400)
//             .expect('"user not created"')
//             .end((err) => {
//                 if (err) return done(err);
//                 done();
//             });
//     });
// });