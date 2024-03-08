const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const packageDefinition = protoLoader.loadSync("todo.proto", {});
const todoPackage = grpc.loadPackageDefinition(packageDefinition).todoPackage;

const client = new todoPackage.TodoService(
  "localhost:4000",
  grpc.credentials.createInsecure()
);

const text = process.argv[2];

client.createTodo(
  {
    id: -1,
    text: text,
  },
  (err, response) => {
    console.log("Recieved from server " + JSON.stringify(response));
  }
);

client.readTodos(null, (err, response) => {
  console.log("All todos :" + JSON.stringify(response));
});
