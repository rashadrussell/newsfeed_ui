import _ from 'underscore';


export const fetchApi = (url, options={}) => {
    let {
        filter,
        page
    } = options;
    let queryArgs = '';
    let queries = [];

    if (filter) {
        queries.push(`filter: ${filter}`);
    }

    if (page) {
        queries.push(`page: ${page}`);
    }

    if (!_.isEmpty(queries)) {
        queryArgs = `(${queries.join(',')})`;
    }

    return fetch(url, {
        method: 'post',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
            'query': `{getEntries${queryArgs} {entries{author{name,picture,score},popularity,isTrending,date,title,description,numComments,thumbnail,codeSubmissionTotal,pledgeTotal,pledgeGoal,pledgerCount,status} hasMore}}`
        })
    })
        .then((response) => response.json());
};
