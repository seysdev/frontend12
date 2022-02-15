import { useSelector } from "react-redux";
import { Loader } from "components/loader/loader";
import "./main.scss";

export function Main(props) {
  const { children } = props;
  const loader = useSelector((state) => state.general.loader);

  console.log("loader", loader)

  return (
    <main className="main container mx-auto pt-10 px-4">
      {children}
      {loader && <Loader />}
    </main>
  );
}
