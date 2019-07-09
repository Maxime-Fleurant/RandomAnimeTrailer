const fetch = require("node-fetch")


var query = `
query {
    Page {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media (type:ANIME, averageScore_greater:75,format:TV,isAdult:false, status:FINISHED, sort:[SCORE_DESC]) {
        title {
          romaji
          english
          native
        }
        description(asHtml: true)
        synonyms
        averageScore
        startDate {
          year
        }
        externalLinks {
          site
          url
        }
        tags {
          name
          description
          category
        }
        genres
        mainStudios: studios(isMain:true) {
          nodes {
            name
          }
        }
        bannerImage
        coverImage {
          extraLarge
          large
          medium
          color
        }
        maincharac: characters(role:MAIN) {
          nodes {
            name {
              first
              last
              full
              native
            }
            image {
              large
              medium
            }
            description
          }
        }
        supportCharac: characters(role:SUPPORTING) {
          nodes {
            name {
              first
              last
              full
              native
            }
            image {
              large
              medium
            }
            description
          }
        }
      }
    }
  }
`;



var url = 'https://graphql.anilist.co',
    options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body:query
    };

fetch(url, options).then(console.log)
                   .then(console.log)
                   .catch(console.log);