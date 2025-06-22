import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/UI/button/Button";
import { useTranslation } from "react-i18next";

function NotFound() {
  const { t } = useTranslation();
  return (
    <div className="notFound__container">
      <h2 className="notFound__title notFound__title_ltr">
        {t("notFoundMsg")}
      </h2>
      <Link to="/">
        <Button>{t("backToHome")}</Button>
      </Link>
      <div className="notFound__img">
        <img
          src={
            require("../assets/images/Oops 404 Error with a broken robot-cuate.svg")
              .default
          }
          alt="404 page"
        />
      </div>
    </div>
  );
}

export default NotFound;
