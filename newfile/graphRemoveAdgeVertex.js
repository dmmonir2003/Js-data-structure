/*

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Add a vertex to the graph
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  // Add an edge between two vertices
  addEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1); // for an undirected graph
    }
  }

  // Remove an edge between two vertices
  removeEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter(vertex => vertex !== v2);
      this.adjacencyList[v2] = this.adjacencyList[v2].filter(vertex => vertex !== v1);
    }
  }

  // Remove a vertex and all its edges
  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      // First, remove the edges related to this vertex
      while (this.adjacencyList[vertex].length) {
        const adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, adjacentVertex);
      }
      // Then remove the vertex itself
      delete this.adjacencyList[vertex];
    }
  }

  // Print the graph
  printGraph() {
    for (let vertex in this.adjacencyList) {
      console.log(`${vertex} -> ${this.adjacencyList[vertex].join(', ')}`);
    }
  }
}

// Example usage
const g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'C');

console.log('Graph before removing edge and vertex:');
g.printGraph();

// Remove edge between A and B
g.removeEdge('A', 'B');

console.log('Graph after removing edge A-B:');
g.printGraph();

// Remove vertex B
g.removeVertex('B');

console.log('Graph after removing vertex B:');
g.printGraph();

*/