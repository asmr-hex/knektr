
/**
 * KNEKTR Graph.
 * TODO: add better description.
 */
export class graph{
    /**
     * create Graph.
     * params {string} name - name
     */
    constructor(...k){
	let name = 'default';
	if (k.length==1){
	     name = k[0];
	}
	this.name = name;
	this.nodes = [];
	this.edges = [];
	this.ids = [];
	this.v_guid = -1;
	this.e_guid = -1;
    }

    /**
     * add node.
     * all nodes receive, at a bare minimum,
     * a graph scoped unique id. Anonymized 
     * nodes recieve negative guids.
     */
    addNode(v){
	/* allow for anonymous nodes */
	if (v == null){
	    v = {id: this.v_guid--};
	} 
	else if (v.id === undefined){
	    v.id = this.v_guid--;
	}
	/* ensure no two node ids are equal */
	if (this.ids.indexOf(v.id) > -1){
	    throw new Error("Node ID already exists!");
	}
	this.id = this.ids.concat(v.ids);
	this.nodes = this.nodes.concat(v);
	return v;
    }
    /**
     * add edge.
     */
    addEdge(...e){
	this.edges[e.id] = e;
    }
}
