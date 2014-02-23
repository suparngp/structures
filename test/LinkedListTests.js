/**
 * Created by suparngupta on 2/23/14.
 */

var LinkedList = require("../lists/LinkedList");
var expect = require("expect.js");
describe("Tests for LinkedList", function(){

    describe("Option test for ", function(){
        it("type should throw error", function(){
            try{
                var list = new LinkedList();
            }
            catch(err){
                expect(!err).not.to.be.ok();
                expect(err instanceof TypeError).to.be.ok();
            }
        });
    });

    describe("Add test", function(){
        it("Should not add a different type item", function(){
            var list = new LinkedList({type: String});
            try{
                list.add(2);
            }
            catch(err){
                expect(!err).not.to.be.ok();
                expect(err instanceof TypeError).to.be.ok();
            }
        });

        it("Should throw range exceeded error", function(){
            var list = new LinkedList({type: String, maxSize: 2});
            list.add("Hello");
            list.add("World");
            try{
                list.add("Error!");
            }

            catch(err){
                expect(!err).not.to.be.ok();
                expect(err instanceof RangeError).to.be.ok();
            }
        });

        it("Should add an item", function(){
            var list = new LinkedList({type: String, maxSize: 2});
            list.add("Hello");
            list.add("World");
            expect(list.size()).to.be(2);
        });
    });

    describe("Remove method", function(){
        it("should remove an item", function(){
            var list = new LinkedList({type: String, maxSize: 2});
            list.add("Hello");
            list.add("World");

            list.remove(1);

            expect(list.size()).to.be(1);
        });
    });
});


