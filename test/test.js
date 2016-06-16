require("babel-polyfill");
var chai = require('chai'),
    expect = chai.expect,
    KNEKTR = require('../build/knektr.core.js').KNEKTR,
    Graph = require('../build/knektr.graph.js').graph;

describe("creating KNEKTR",
	 function (){
	     var knektr = new KNEKTR();
	     it("instantiates a KNEKTR",
		function (){
		    expect(knektr).to.be.an.instanceof(KNEKTR);
		});
	     it("builds a default graph",
		function (){
		    expect(knektr.graphs.get('default')).to.exist;
		    expect(knektr.graphs.get('default')).to.be.instanceof(Graph);
		});
	     it("builds anonymous graphs",
		function (){
		    for (var k=0; k < 27; k++){
			knektr.addGraph();
		    }
		    expect(knektr.graphs.size).to.be.equal(28);
		});
	     it("names anonymous graphs alphabetically",
		function (){
		    var g = knektr.addGraph();
		    expect(g.name).to.be.equal('AB');
		});
	 });

describe("building graphs", 
	 function (){
	     var knektr = new KNEKTR();
	     describe("adding graphs with graph objects", 
		      function (){
			  it("incorporates graph into KNEKTR", 
			     function (){
				 var g = new Graph("scale-free");
				 knektr.addGraph(g);
				 expect(knektr.graphs.has("scale-free")).to.be.true;
			     });
		      });
	     describe("adding graphs by passing only a name",
		      function (){
			  it("incorporates graph into KNEKTR",
			     function (){
				 knektr.addGraph("cayley");
				 expect(knektr.graphs.has("cayley")).to.be.true;
			     });
		      });
	     describe("adding graphs with the same name", 
		      function (){
			  it("throws an error", 
			     function (){
				 var err = false;
				 knektr.addGraph("erdos-renyi");
				 try{ knektr.addGraph("erdos-renyi") }
				 catch (e){ err = true; }
				 expect(err).to.be.true;
			     });
		      });
	     describe("setting a new default graph",
		      function (){
			  it("can return default graph when no args provided",
			     function (){
				 var g = knektr.defaultGraph()
				 expect(g.name).to.be.equal("default");
			     });
			  it("can set the default using a valid name",
			     function (){
				 var g = knektr.defaultGraph("erdos-renyi")
				 expect(g.name).to.be.equal("erdos-renyi");				 
			     });
			  it("can set the default using a valid graph",
			     function (){
				 var g = knektr.graphs.get("cayley");
				 g = knektr.defaultGraph(g)
				 expect(g.name).to.be.equal("cayley");				 
			     });
			  it("throws an error given invalid name",
			     function (){
				 var err = false
				 try {knektr.defaultGraph("lagrange") }
				 catch (e){ err = true; }
				 expect(err).to.be.true;				 
			     });
		      });
	     describe("deleting graphs", 
		      function (){
			  it("can take a graph name argument", 
			     function (){
				 knektr.deleteGraph("erdos-renyi");
				 expect(knektr.graphs.has("erdos-renyi")).to.be.false;
			     });
			  it("can take a graph object argument", 
			     function (){
				 var g = knektr.addGraph();
				 knektr.deleteGraph(g);
				 expect(knektr.graphs.has(g.name)).to.be.false;
			     });
			  it("can take no arguments to clear all graphs", 
			     function (){
				 knektr.deleteGraph();
				 expect(knektr.graphs.size).to.be.equal(0);
			     });
		      });
	     describe("adding nodes", 
		      function (){
			  var g = knektr.addGraph("celebrity reptilians");
			  it("supports anonymous nodes", 
			     function (){
				 g.addNode();
				 expect(g.nodes.length).to.be.equal(1);
			     });
			  it("supports appending artbitrary key-value pairs to nodes", 
			     function (){
				 var v = g.nodes[0];
				 v.type = "actor";
				 v.token = "Ronald Reagan";
				 v.texture = "slimey";
				 
			     });
		      });
	 });




