
const request = require('supertest');
const {assert, expect} = require('chai');
const app = require('../app');
const {generateId, checkId} = require ('./database-private');

describe('magic number tests', () => {
    test('generateId generates a number which adheres to special code', () => {
        let num = generateId;
        let ref = num[1];
        expect(num[17].toEqual(ref));
    })



})