#!/bin/bash
echo "-----------------------------"
echo "Starting: After Installation"
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

if [[ -d "/etc/nginx" ]]; then
    info "Restarting NGINX Server"
    systemctl reload nginx

