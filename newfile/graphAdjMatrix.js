/*
class Graph {
  constructor(size) {
    this.size = size;
    this.adjacencyMatrix = [];

    // Initialize matrix with all 0s
    for (let i = 0; i < size; i++) {
      this.adjacencyMatrix[i] = new Array(size).fill(0);
    }
  }

  // Add an edge between two vertices
  addEdge(src, dest) {
    if (src >= this.size || dest >= this.size || src < 0 || dest < 0) {
      console.log("Invalid vertex");
      return;
    }

    // Since it's an undirected graph, add both ways
    this.adjacencyMatrix[src][dest] = 1;
    this.adjacencyMatrix[dest][src] = 1;
  }

  // Remove an edge between two vertices
  removeEdge(src, dest) {
    if (src >= this.size || dest >= this.size || src < 0 || dest < 0) {
      console.log("Invalid vertex");
      return;
    }

    this.adjacencyMatrix[src][dest] = 0;
    this.adjacencyMatrix[dest][src] = 0;
  }

  // Print the adjacency matrix
  printMatrix() {
    for (let i = 0; i < this.size; i++) {
      console.log(this.adjacencyMatrix[i].join(" "));
    }
  }
}


// Usage example
const graph = new Graph(4);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(1, 3);


graph.printMatrix();

*/