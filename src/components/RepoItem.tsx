import chield_alt from "../assets/SVG/Chield_alt.svg";
import nesting from "../assets/SVG/Nesting.svg";
import star from "../assets/SVG/Star.svg";
import { RepoType } from "../services/apiGithub";
import { daysElapsedSince } from "../utils/helpers";

type RepoItemType = {
  repo: RepoType;
};

function RepoItem({ repo }: RepoItemType) {
  const { name, description, forks, watchers, updated_at, license, html_url } =
    repo;

  return (
    <li className="repo__item">
      <h2 className="heading-2">
        <a href={html_url} className="repo__link" target="_blank">
          {name}
        </a>
      </h2>
      <p className="paragraph-2">{description}</p>
      <div className="repo__detail">
        {license?.spdx_id && (
          <span className="repo__img-number">
            <img src={chield_alt} alt="License" />
            {license.spdx_id}
          </span>
        )}
        <span className="repo__img-number">
          <img src={nesting} alt="Forks" />
          {forks}
        </span>
        <span className="repo__img-number">
          <img src={star} alt="Star" />
          {watchers}
        </span>
        <span className="repo__days">
          updated {daysElapsedSince(updated_at)} days ago
        </span>
      </div>
    </li>
  );
}

export default RepoItem;
