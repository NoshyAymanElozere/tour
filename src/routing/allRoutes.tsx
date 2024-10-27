import { t } from "i18next";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { useAuth } from "../context/auth-and-perm/AuthProvider";

import { Home } from "../pages/home";

import { ErrorPage } from "./ErrorPage";
import { Root } from "./Root";
import { Login } from "../pages/login";
import { Countries } from "../pages/countries/Index";
import { Cities } from "../pages/cities/Index";
import { Places } from "../pages/places/Index";
import { Categories } from "../pages/categories/Index";
import { Tours } from "../pages/tours/Index";
import AddTour from "../pages/tours/add";
import { Blogs } from "../pages/blogs/Index";
import EditTour from "../pages/tours/edit";
import { SettingSite } from "../pages/setting/Index";
import { Contact } from "../pages/setting/contact";
import { About } from "../pages/setting/about";
import { Terms } from "../pages/setting/terms";
import { Privacy } from "../pages/setting/privacy";
import { Bookings } from "../pages/bookings/Index";
import { Files } from "../pages/bookings/files/Index";
import { DetailsFile } from "../pages/bookings/files/detailsFile/Index";
import { Media } from "../pages/media/Index";
import DetailsFolder from "../pages/media/detailsFolder/Index";
import { Users } from "../pages/users/Index";
import { Reviews } from "../pages/reviews/Index";

export const AllRoutesProvider = () => {
  const userString = localStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : null;
  const [toggled, setToggled] = useState(false);
  const { hasPermission } = useAuth();

  // tail
  return (
    <Routes>
      <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
        <Route path="*" element={<ErrorPage />} />
        <Route element={<Home title={t("Home")} />} />
        <Route
          path="/countries"
          element={<Countries title={t("Countries")} />}
        />
        <Route path="/cities" element={<Cities title={t("Cities")} />} />
        <Route path="/places" element={<Places title={t("Places")} />} />
        <Route path="/users" element={<Users title={t("Users")} />} />

        <Route
          path="/categories"
          element={<Categories title={t("Categories")} />}
        />
        <Route
          path="/reviews"
          element={<Reviews title={t("Reviews")} />}
        />
        <Route path="/tours" element={<Tours title={t("Tours")} />} />
        <Route path="/tours/add" element={<AddTour title={t("Add Tours")} />} />
        <Route
          path="/tours/edit/:id"
          element={<EditTour title={t("Edit Tours")} />}
        />
        <Route
          path="/setting-contact"
          element={<Contact title={t("Sitting Contact")} />}
        />
        <Route
          path="/setting-about"
          element={<About title={t("Sitting About")} />}
        />
        <Route
          path="/setting-terms"
          element={<Terms title={t("Sitting Terms")} />}
        />
        <Route
          path="/setting-privacy"
          element={<Privacy title={t("Sitting Privacy")} />}
        />
        <Route path="/requests" element={<Bookings title={t("bookings")} />} />
        <Route path="/requests/files" element={<Files title={t("Files")} />} />
        <Route
          path="/requests/files/:id"
          element={<DetailsFile title={t("Details Files")} />}
        />
        <Route path="/media" element={<Media title={t("Media")} />} />
        <Route path="/media/:file_id" element={<DetailsFolder title={t("Media")} />} />


        <Route path="/blogs" element={<Blogs title={t("blogs")} />} />
      </Route>

      <Route
        errorElement={<ErrorPage />}
        path="/login"
        element={<Login title={t("login")} />}
      />
    </Routes>
  );
};
