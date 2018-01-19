import { expect } from 'chai';
import { suite, test, slow, timeout } from "mocha-typescript";

import * as ExampleModule from "../index";

@suite class TestExample{

    @test("Should return 'Hello World!'")
    public testFoo(){
        expect(ExampleModule.foo()).to.equal("Hello World!");
    }
}