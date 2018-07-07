import 'mocha';
import { expect } from 'chai';

import {Path} from '../main/path';

describe('Check Path class', () => {

    it('functions new Path("") should work correctly', () => {
        // Execute
        const empty = new Path("");

        // Verify
        expect(empty.links).to.be.empty;
    });

    it('functions new Path("date") should work correctly', () => {
        // Execute
        const scalar = new Path("date");

        // Verify
        expect(scalar.links[0].field).to.be.equal("date");
        expect(scalar.links[0].target).to.be.null;
        expect(scalar.links.length).to.be.equal(1);
    });

    it('functions new Path("ref@Type") should work correctly', () => {
        // Execute
        const scalar = new Path("ref@Type");

        // Verify
        expect(scalar.links[0].field).to.be.equal("ref");
        expect(scalar.links[0].target).to.be.equal("Type");
        expect(scalar.links.length).to.be.equal(1);
    });

    it('functions new Path("ref@Type.float") should work correctly', () => {
        // Execute
        const scalar = new Path("ref@Type.float");

        // Verify
        expect(scalar.links[0].field).to.be.equal("ref");
        expect(scalar.links[0].target).to.be.equal("Type");
        expect(scalar.links[1].field).to.be.equal("float");
        expect(scalar.links[1].target).to.be.null;
        expect(scalar.links.length).to.be.equal(2);
    });

    it('functions new Path("ref1@Type1.^ref2@Type2") should work correctly', () => {
        // Execute
        const scalar = new Path("ref1@Type1.^ref2@Type2");

        // Verify
        expect(scalar.links[0].field).to.be.equal("ref1");
        expect(scalar.links[0].target).to.be.equal("Type1");
        expect(scalar.links[1].field).to.be.equal("^ref2");
        expect(scalar.links[1].target).to.be.equal("Type2");
        expect(scalar.links.length).to.be.equal(2);
    });

    it('functions new Path("ref1@Type1.^ref2@Type2.string") should work correctly', () => {
        // Execute
        const scalar = new Path("ref1@Type1.^ref2@Type2.string");

        // Verify
        expect(scalar.links[0].field).to.be.equal("ref1");
        expect(scalar.links[0].target).to.be.equal("Type1");
        expect(scalar.links[1].field).to.be.equal("^ref2");
        expect(scalar.links[1].target).to.be.equal("Type2");
        expect(scalar.links[2].field).to.be.equal("string");
        expect(scalar.links[2].target).to.be.null;
        expect(scalar.links.length).to.be.equal(3);
    });

    it('functions new Path(null).isEmpty() should return true', () => {
        // Setup
        const path = new Path(null);

        // Execute
        const actual = path.isEmpty();

        // Verify
        expect(actual).to.be.true;
    });
    it('functions new Path("").isEmpty() should return true', () => {
        // Setup
        const path = new Path("");

        // Execute
        const actual = path.isEmpty();

        // Verify
        expect(actual).to.be.true;
    });

    it('functions new Path("field").isEmpty() should return false', () => {
        // Setup
        const path = new Path("field");

        // Execute
        const actual = path.isEmpty();

        // Verify
        expect(actual).to.be.false;
    });
});