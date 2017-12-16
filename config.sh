#!/usr/bin/env bash

directory=pwd

echo "${PWD}/.env"

file="${PWD}/.env"
while IFS= read -r line
do
    IFS='=' read -ra ENVS <<< "$line"
    export ${ENVS[0]}=${ENVS[1]}
	printf '%s\n' "$line"
done <"$file"