#!/bin/bash
hugo_version="0.103.1"
# Downoad and install the latest version of extended Hugo
wget "https://github.com/gohugoio/hugo/releases/download/v${hugo_version}/hugo_extended_${hugo_version}_linux-amd64.deb"
sudo apt install -y ./hugo_extended_${hugo_version}_linux-amd64.deb
rm -f hugo_extended_${hugo_version}_linux-amd64.deb
# Add the arcane themes and hugo-chart themes
git submodule add "https://github.com/half-duplex/hugo-arcana" themes/arcana
git submodule add "https://github.com/Shen-Yu/hugo-chart.git" themes/hugo-chart
git submodule init
git submodule update
