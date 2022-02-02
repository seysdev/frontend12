import "./main.scss";

export function Main(props) {
  const {
    children
  } = props;

  return <main className="main container mx-auto pt-10 px-4">{children}</main>;
}
