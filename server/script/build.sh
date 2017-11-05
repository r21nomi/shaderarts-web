#!/bin/bash
cd /home/ec2-user/go/src/github.com/r21nomi/arto-web/server
go build -o arto-web
./arto-web