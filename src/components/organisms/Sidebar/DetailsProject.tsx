import { Avatar, Box, Title } from "@mantine/core";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import BaseInputSearch from "../../molecules/formik-fields/BaseInputSearch";
import { useFetch } from "../../../hooks";
import { IoAddCircleOutline, IoBagOutline } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { AiOutlineAppstore } from "react-icons/ai";
import { useAuth } from "../../../context/auth-and-perm/AuthProvider";
import { getInitials } from "../../../utils/helpers";
import { Loading } from "../../molecules/Loading/Loading";

type DetailsProject_TP = {
  classes: any;
  accountLinks: any;
};
function DetailsProject({ classes, accountLinks }: DetailsProject_TP) {
  const { user } = useAuth();
  const { id } = useParams();
  const [collapsed, setCollapsed] = useState(true);


  return(
    <div>
      <div className="relative">
        <div className="absolute z-20 left-0 right-0 bg-[#fbfbfb] pb-3 cursor-pointer">
          <Title
            order={5}
            className={`${classes?.title} flex justify-between items-center  `}
            onClick={() => setCollapsed(!collapsed)}
          >
            <div className="flex items-center gap-4 ">
              <Avatar
                color="white"
                radius="sm"
                className="bg-main w-[40px] h-[40px]"
              >
                AC
              </Avatar>
              Toure
            </div>
            {!collapsed ? (
              <FaAngleUp className="text-dark" />
            ) : (
              <FaAngleDown className="text-dark" />
            )}
          </Title>
        </div>
        <div
          className="bg-[#fbfbfb] h-[70vh]  absolute left-0 w-full  z-10 transition-all  border-t"
          style={{
            transform: collapsed ? "translateY(-100%) " : "translateY(15%)",
          }}
        >
          <div>
            <div className="p-3 mt-3  ">
              <BaseInputSearch
                name=""
                placeholder="Search for project"
                label=""
              />
            </div>
            <div className="h-[220px]  overflow-scroll">
              Project-1
            </div>

            <div className=" p-3 mt-3 border-t py-3 ">
              <Link
                to={"/corporate-account/overview"}
                className="flex items-center gap-2"
              >
                <IoBagOutline
                  style={{ width: "23px", height: "23px", color: "#5f616a " }}
                />
                <p>Corporate account</p>
              </Link>
              <Link
                to={"/projects/all"}
                className="flex items-center gap-2 mt-7"
              >
                <AiOutlineAppstore
                  style={{ width: "23px", height: "23px", color: "#5f616a " }}
                />
                <p>All projects</p>
              </Link>
              <Link
                to={"/projects/all/add"}
                className="flex items-center gap-2 mt-7"
              >
                <IoAddCircleOutline
                  style={{ width: "23px", height: "23px", color: "#5f616a " }}
                />
                <p>Create new project</p>
              </Link>
            </div>
          </div>
        </div>
      
      </div>

     
    </div>
  );
}

export default DetailsProject;
