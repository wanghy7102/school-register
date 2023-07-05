import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Success = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <h1>Succcess!</h1>
      <p>
        Thank you for registering Contoso City College. We will get in touch
        with you shortly.
      </p>
    </>
  );
};

export default Success;
