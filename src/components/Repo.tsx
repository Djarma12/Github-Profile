import { useGithub } from "../context/GithubProvider";
import { useGithubRepos } from "../hooks/useGithubRepos";
import Heading from "./Heading";
import RepoItem from "./RepoItem";
import Spinner from "./Spinner";

function Repo() {
  const { githubRepos, isLoadingRepos, search } = useGithub();
  const { refetch } = useGithubRepos(search);
  const hasRepos =
    githubRepos && Array.isArray(githubRepos) && githubRepos.length > 0;
  const showNoRepoMessage = !isLoadingRepos && !hasRepos;

  return (
    <div className="repo">
      <ul className="repo__list">
        {isLoadingRepos && <Spinner />}

        {showNoRepoMessage && <Heading type="heading-2">No repo</Heading>}
        {hasRepos &&
          githubRepos.map((repo) => <RepoItem repo={repo} key={repo.id} />)}
      </ul>
      <button onClick={() => refetch()}>Load more</button>
    </div>
  );
}

export default Repo;
