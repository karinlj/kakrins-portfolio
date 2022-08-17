interface IProps {
  heading: string;
  subHeading?: string;
}
const HeaderPages = ({ heading, subHeading }: IProps) => {
  return (
    <header className="header_pages">
      <h1 className="heading cursive">
        {heading}
        <span className="sub_heading">{subHeading}</span>
      </h1>
    </header>
  );
};
export default HeaderPages;
