#KNEKTR [![Build Status](https://travis-ci.org/connorwalsh/knektr.svg?branch=master)](https://travis-ci.org/connorwalsh/knektr) [![Coverage Status](https://coveralls.io/repos/github/connorwalsh/knektr/badge.svg?branch=setup-coveralls)](https://coveralls.io/github/connorwalsh/knektr?branch=setup-coveralls)
Wouldn't it be nice to multiply realize your backend data model with your front 
end API? 

## Features
### Functional Integration
Allows for the easy integration of custom functionality to KNEKTR instances.

```javascript
	var coalesce = function (){ /* ... */ }
	var knektr = new KNEKTR();
	/* integrate function with KNEKTR */
	knektr.integrate(coalesce);
	/* call from knektr */
	knektr.coalesce();

	var Qmaximization = function (){ /* ... */}
	var graph = knektr.addGraph('myGraph');
	/* integrate function with a single graph instance */
	graph.integrate(Qmaximization);
	/* call from graph */
	graph.Qmaximization();

	var graphTaxonomy = function (){ /* ... */}
	var graphs = knektr.graphs;
	/* integrate function with a graph collection */
	graphs.integrate(graphTaxonomy);
	/* call from graphs */
	graphs.graphTaxonomy();
```

## Goals
This is similar to some functionality provided in Sigma.js, though the
option of scoping is made available in KNEKTR as well as a simpler interface.

D3.js shortcomings:
While D3 is a fantastic general purpose library for data visualization in 
the browser, it does not provide a great deal of flexibility and power for 
creating, visualizing, and manipulating graphs specifically.

The D3 interface for visualizing nodes and edges is entirely through a force 
directed layout object. this force object accepts a list of node objects and 
a list of edge (link) objects. The source and target properties which define
a link do not accept nodeIDs, rather the location of nodes within the supplied
node list. This is highly prone to error when dealing with dynamically changing 
graph environments where nodes are continuously being inserted and deleted.

In general, D3 does not provide a graph model layer, but simply a visualization 
layer. This means that D3 does not natively support simple graph analysis or 
querying. Because of this, D3 does not let you natively operate on additional 
node or edge properties (e.g. node/edge filtering, selective traversals, etc.).
Wouldn't it be nice to multiply realize your backend data model with your front 
end API? 

VivaGraph shortcomings:
While VivaGraph supplies an intuitive and modular approach to a graph library 
(separation of graph model from rendered visual), the ease-of-use remains a 
large draw-back. Now, VivaGraph has been modularized into distinct ngraph 
modules, which all must be imported for certain functionality to work. Also, 
the documentation is not very good.


