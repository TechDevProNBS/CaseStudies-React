#!/bin/bash
echo "-----------------------------"
echo "Starting: Before Installation"
echo "-----------------------------"

DEBUG=true

debug() {
  if [[ "$DEBUG" == "true" ]]; then
    echo -e "PRE: [DEBUG] $*"
  fi
}

info() {
  echo -e "PRE: [INFO] $*"
}

warn() {
  echo -e "PRE: [WARN] $*"
}

fatal() {
  echo -e "PRE: [FATAL] $*"
}

info "Check if /data directory exist, if not, create the directory"
mkdir -p /data
if [[ -d "/data" ]]; then
  info "Successfully Created /data directory"
fi

