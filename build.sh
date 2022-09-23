# cd ts-client
# yarn

GRPC_SERVER=grpc-poc-server
GRPC_PROXY=grpc-poc-envoy

docker rmi $GRPC_SERVER $GRPC_PROXY

cd envoy
docker build -t grpc-poc-envoy .

cd ../server
docker build -t grpc-poc-server .

echo "done"
