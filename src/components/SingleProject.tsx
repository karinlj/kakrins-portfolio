import { IProject } from "../interfaces";

interface IProps {
  project: IProject;
}
const SingleProject = ({ project }: IProps) => {
  const {
    title,
    link,
    image,
    releaseDate,
    techniques,
    description,
    acknowledgement,
  } = project.fields;

  return (
    <div className="col-12 col-md-6 col-lg-4">
      <article className="project">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project_link"
          aria-label="project url or gitHub repo"
        >
          link
        </a>
        <div className="featured_image">
          <img src={image.fields.file.url} alt={image.fields.title} />
        </div>
        <div className="content_container">
          <h3 className="title">{title}</h3>
          <div className="small_text">
            <div className="date">
              <span>
                <strong className="font_bold">Finished on: </strong>
              </span>
              {new Date(releaseDate).toLocaleDateString()}
            </div>

            <div className="techniques">
              <span>
                <strong className="font_bold">Techniques: </strong>
              </span>
              {techniques.map((technique, index) => {
                return (
                  <div key={index} className="technique">
                    {technique}
                    {index === techniques.length - 1 ? "" : ","}
                  </div>
                );
              })}
            </div>
            {acknowledgement ? (
              <div className="acknowledgement">
                <span>
                  <strong className="font_bold">Thanks to: </strong>
                </span>
                {acknowledgement}
              </div>
            ) : (
              ""
            )}
          </div>
          <p className="description">{description}</p>
        </div>
      </article>
    </div>
  );
};

export default SingleProject;
