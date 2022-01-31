import { generateApiClient } from '@utils/apiUtils';
// const repoApi = generateApiClient('github');
const repoApi = generateApiClient('iTunes');

// export const getRepos = (repoName) => repoApi.get(`/search/repositories?q=${repoName}`);
export const getRepos = (searchTerm) => {
    const songResponse = repoApi.get(`/search?term=${searchTerm}`);
    console.log(songResponse);
    return songResponse;
}
