import useBreadcrumbs from "use-react-router-breadcrumbs";

import { t } from "i18next";

export const Breadcrumbs = ({ isSidebarCollapsed }: any) => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <>
      <div
        className={`flex gap-2 breadcrumbs-styleing ${
          !isSidebarCollapsed && "mx-[1.5rem]"
        } `}
      >
        <div className="h-5 "></div>
        {breadcrumbs.map(({ breadcrumb }) => (
          <>
            {breadcrumbs.length == 1 ? (
              <>
                <h2 className="text-[14px] font-[600]">
                  {t(breadcrumb?.props?.children)}
                </h2>
              </>
            ) : (
              <>
                <h2 className="text-[14px] font-[600]">
                  {t(breadcrumb?.props?.children)}
                </h2>
                <span>-</span>
              </>
            )}
          </>
        ))}
      </div>
    </>
  );
};
