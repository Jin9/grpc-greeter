FROM golang:1.18.5 AS builder

WORKDIR $GOPATH/app

COPY go.mod go.sum ./
RUN go mod download
RUN go mod verify
COPY . .

# Build the binary
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -ldflags="-w -s" -o /go/bin/app .

FROM alpine
COPY --from=builder /go/bin/app /go/bin/app
ENTRYPOINT ["/go/bin/app"]
