// Graph represented as an adjacency list
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Add a vertex (node)
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  // Add an edge between two vertices
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1); // For undirected graph
    }
  }

  // Check if an edge exists between two vertices
  hasEdge(vertex1, vertex2) {
    return this.adjacencyList[vertex1].includes(vertex2);
  }

  // Display the graph
  display() {
    for (let vertex in this.adjacencyList) {
      console.log(`${vertex} -> ${this.adjacencyList[vertex].join(", ")}`);
    }
  }
}


// Example usage:
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("A", "C");

graph.display();

// Check if an edge exists between A and B
console.log("Edge between A and B:", graph.hasEdge("A", "B")); 

// Check if an edge exists between B and C
console.log("Edge between B and C:", graph.hasEdge("B", "C")); // false