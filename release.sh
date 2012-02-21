#!/bin/bash

if [ -z "$1" ]; then
	echo "Please enter version number (ie: 1.0.3)";
	exit;
fi;

date=date;
version=$1;
releases='./releases';
path="jquery.tabbed-${version}";
tgz_file="${releases}/${path}.tgz";
release_path="${releases}/$path";

mkdir $release_path;
cp jquery.tabbed.* $release_path; 
cp -Rfp img $release_path; 
tar czf $tgz_file -C $releases $path
