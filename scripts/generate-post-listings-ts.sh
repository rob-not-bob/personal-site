#!/bin/bash

cd src/routes

post_files=$(ls ./posts/**/post.svx)

getAbsFilename() {
  # $1 : relative filename
  echo "$(cd "$(dirname "$1")" && pwd)/$(basename "$1")"
}

createEntry() {
  key=$1
  value=$2

  echo "${key}: ${value},"
}

createStringEntry() {
  key=$1
  value=$2

  echo "${key}: \"${value}\","
}

createPostMetadataJSON() {
  post=$1
  location=".${2}"
  # Capture the metadata
  post_metadata=$(echo "${post%---*}")
  post_metadata=$(echo "${post_metadata#---*}")

  # Fancy loop syntax for each new line in post_metadata
  IFS=$'\n' read -rd '' -a metadata_lines <<<"$post_metadata"
  for line in "${metadata_lines[@]}"; do
    key=$(echo $line | awk -F ": " '{print $1}')
    value=$(echo $line | awk -F ": " '{print $2}')

    # For all relative image urls...
    if [[ "${key}" = "heroImageUrl" ]] && [[ ! "${value}" = "http"* ]]; then
      cd "${location}"

      # Create a url relative to the routes directory for importing
      value=$(getAbsFilename "${value}")
      value="import(\"./posts/${value#*\/posts\/}?run\")"

      cd - > /dev/null 2>&1
      json="${json}$(createEntry "${key}" "${value}")"
    else
      json="${json}$(createStringEntry "${key}" "${value}")"
    fi

  done

  echo "${json}"
}

posts=""
for post_location in ${post_files[@]}; do
  post=$(cat ${post_location})

  # Create post url
  href="/${post_location#\.\/}"
  href=${href%\/post\.svx}
  post_json=$(createStringEntry 'href' ${href})

  # Create all metadata entries
  metadata_json=$(createPostMetadataJSON "${post}" "${href}")
  post_json="${post_json}${metadata_json}"

  # Create post description entry (the first paragraph in the file)
  post_description=$(grep '^[A-Z]' ${post_location} | head -n 1)
  post_description=$(echo "${post_description}" | sed -r 's/"/\\"/g')
  post_json="${post_json}$(createStringEntry 'description' "${post_description}")"

  # Remove , at end of JSON
  post_json="{${post_json%?}}"

  # Output progress
  echo "${post_location}"
  echo "----------------------------------------"
  echo "$post_json"
  echo -e "----------------------------------------" "\n"

  posts="${posts}${post_json},"
done

posts="// eslint-disable-next-line @typescript-eslint/ban-ts-comment\n// @ts-nocheck\nexport const posts = [${posts%?}];"
echo -e ${posts} > ./posts.ts
npx prettier --plugin-search-dir . --write ./posts.ts
