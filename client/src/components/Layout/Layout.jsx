import React, { useContext, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { useAuth, useUser } from "@clerk/clerk-react";
import UserDetailContext from "../../context/UserDetailContext";
import { useMutation } from "react-query";
import { createUser } from "../../utils/api";
import useFavourites from "../../hooks/useFavourites";
import useBookings from "../../hooks/useBookings";

const Layout = () => {

  useFavourites()
  useBookings()

  const { isSignedIn, getToken } = useAuth();
  const { user } = useUser();
  const { setUserDetails } = useContext(UserDetailContext);

  const email = user?.primaryEmailAddress?.emailAddress;

  const { mutate } = useMutation({
    mutationKey: [email],
    mutationFn: (token) => createUser(email, token),
  });

  useEffect(() => {
    const getTokenAndRegister = async () => {
      try {
        const res = await getToken();
        if (res) {
          localStorage.setItem("access_token", res);
          setUserDetails((prev) => ({ ...prev, token: res }));
          mutate(res);
        }
      } catch (error) {
        console.error("Error getting token:", error);
      }
    };

    if (isSignedIn && email) {
      getTokenAndRegister();
    } else if (!isSignedIn) {
      setUserDetails((prev) => ({ ...prev, token: null }));
    }
  }, [isSignedIn, email]);

  return (
    <>
      <div style={{ background: "var(--black)", overflow: "hidden" }}>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
