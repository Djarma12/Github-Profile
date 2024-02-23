import { useGithub } from "../context/GithubProvider";
import { scrollToTop } from "../utils/helpers";
import Button from "./Button";
import Heading from "./Heading";
import RepoItem from "./RepoItem";
import Spinner from "./Spinner";

function Repo() {
  const { githubRepos, isLoadingRepos, setFetchAll } = useGithub();
  const hasRepos = Array.isArray(githubRepos) && githubRepos.length > 0;
  // const hasRepos =
  //   githubRepos && Array.isArray(githubRepos) && githubRepos.length > 0;
  const showNoRepoMessage = !isLoadingRepos && !hasRepos;

  return (
    <div className="repo">
      <ul className="repo__list">
        {isLoadingRepos && <Spinner />}

        {showNoRepoMessage && <Heading type="heading-2">No repo</Heading>}

        {hasRepos &&
          githubRepos.map((repo) => <RepoItem repo={repo} key={repo.id} />)}
      </ul>

      {!isLoadingRepos && hasRepos && githubRepos.length >= 4 && (
        <Button
          onClick={() => setFetchAll(githubRepos.length === 4)}
          className="repo__button button button--text"
        >
          {githubRepos.length === 4 ? "View all repositories" : "Show less"}
        </Button>
      )}
    </div>
  );
}

export default Repo;
