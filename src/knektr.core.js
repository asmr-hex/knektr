import {graph} from './knektr.graph'
import {alphabetize} from './knektr.utils'

/**
 * core KNEKTR class.
 * TODO: add description.
 */
export class KNEKTR{

    /**
     * create KNEKTR.
     * @param {object} config - configuration object.
     */
    constructor(config=null){
	/* creates a default graph on instantiation */
	this.graphs = new Map([['default', new graph('default')]]);
	this.algorithms = {};
	this.renderer = {};
	this.config = {};
    }

    /**
     * add a new graph.
     * @param {[string[, string]]} [name[, file]] - optional name, filename
     */
    addGraph(g=null){
	/* TODO: support automated parsing of various 
	 * graph formats (i.e. GEXF, CSV, etc.)
	 */
	let name = null;
	/* assign a default name */
	if (g==null){
	    name = alphabetize(this.graphs.size);
	    g = new graph(name);
	}
	else if (typeof g == 'string'){
	    name = g;
	    g = new graph(name);
	}
	else if (g instanceof graph){
	    name = g.name;
	}
	/* ensure all graph names are unique */
	if (this.graphs.has(name)){ 
	    throw new Error("Graph name already exists!");
	}
	this.graphs.set(name, g);
	return this.graphs.get(name);
    }

    /**
     * deletes a graph.
     * @param TBD
     */
    deleteGraph(g=null){
	if (g == null){
	    this.graphs.clear();
	}
	else if (typeof g  == 'string'){
	    this.graphs.delete(g);
	} 
	else if (g instanceof graph) {
	    this.graphs.delete(g.name);
	}
    }

    /**
     * add a node to the default graph.
     * @param TBD
     */
    addNode(v){
	let g = this.graphs.get('default');
	g.addNode(v);
    }

    /**
     * add an edge to the default graph.
     * @param TBD
     */
    addEdge(e){
	let g = this.graphs.get('default');
	g.addEdge(e);
    }
}


