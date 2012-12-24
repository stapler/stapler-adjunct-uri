#!/bin/bash -ex
tag=1.8.1
[ -d target ] || mkdir target
pushd target
  wget -N -O the.zip https://github.com/medialize/URI.js/archive/v$tag.zip
  unzip -o the.zip

  dst=../src/main/URI.js/org/kohsuke/stapler/uri
  [ -d $dst ] && rm -rf $dst
  mkdir -p $dst

  cp -R URI.js-$tag/src/* $dst
  pushd $dst
    for f in *.js;
    do
      g=$(echo $f | sed -e 's/\./-/g' | sed -e 's/-js/.js/g')
      [ $f == $g ] || mv $f $g
    done
  popd
popd
mvn -B release:update-versions -DdevelopmentVersion=$tag-1-SNAPSHOT
