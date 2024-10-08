class Graph {
  constructor() {
    this.adjacencyList = {}; // This will store the vertices and edges
  }

  // Add a vertex
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []; // Initialize the vertex with an empty array for its edges
    }
  }

  // Add an edge between two vertices
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2); // Add vertex2 as an adjacent node to vertex1
      this.adjacencyList[vertex2].push(vertex1); // For an undirected graph, also add vertex1 as adjacent to vertex2
    }
  }

  // Display the graph
  displayGraph() {
    for (let vertex in this.adjacencyList) {
      console.log(`${vertex} -> ${this.adjacencyList[vertex].join(", ")}`);
    }
  }
}