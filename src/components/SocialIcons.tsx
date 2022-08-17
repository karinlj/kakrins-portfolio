interface IProps {
  footerLocation?: boolean;
}
const SocialIcons = ({ footerLocation }: IProps) => {
  return (
    <ul className="social_items_list">
      <li className="social_item">
        <a
          href="mailto:kaljunggren@gmail.com"
          target="_top"
          aria-label="Karin email"
        >
          <i className="fas fa-envelope" aria-hidden="true"></i>
          {footerLocation ? (
            <span className="social_item_name"> kaljunggren@gmail.com</span>
          ) : null}
        </a>
      </li>
      <li className="social_item">
        <a href="https://se.linkedin.com/in/karin-ljunggren">
          <i className="fab fa-linkedin"></i>
          {footerLocation ? (
            <span className="social_item_name"> LinkedIn Profile</span>
          ) : null}
        </a>
      </li>
      <li className="social_item">
        <a href="https://github.com/karinlj">
          <i className="fab fa-github"></i>
          {footerLocation ? (
            <span className="social_item_name"> GitHub Profile</span>
          ) : null}
        </a>
      </li>
    </ul>
  );
};

export default SocialIcons;
