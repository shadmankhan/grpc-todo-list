const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const packageDefinition = protoLoader.loadSync("todo.proto", {});
const todoPackage = grpc.loadPackageDefinition(packageDefinition).todoPackage;
const todoService = require("./todoService");

const server = new grpc.Server();

server.addService(todoPackage.TodoService.service, todoService);

server.bindAsync(
  "0.0.0.0:4000",
  grpc.ServerCredentials.createInsecure(),
  () => {
    server.start();
  }
);
