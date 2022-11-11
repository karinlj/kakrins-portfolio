interface IProps {
  toggleMenu(): void;
  mobileOpen: boolean;
}
const ToggleBtn = ({ toggleMenu, mobileOpen }: IProps) => {
  return (
    <button
      className={`menu_btn ${mobileOpen ? "menu_btn_clicked" : ""}`}
      aria-label="Mobile Menu"
      aria-expanded={mobileOpen ? "true" : "false"}
      onClick={toggleMenu}
      data-testid="toggleBtn"
    >
      <div aria-hidden="true"></div>
    </button>
  );
};
export default ToggleBtn;
