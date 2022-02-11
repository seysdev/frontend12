import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

export function PageLogout() {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "RESET",
    });
    history.push("/login");
  }, []);

  return <div>Logout...</div>;
}
