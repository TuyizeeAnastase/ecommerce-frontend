import { SidenavHeader } from "./header";
import { SideNavItems } from "./items";

export const SideNavigation = () => {
  return (
    <div className="float-left w-1/6  pb-32 lg:pb-12">
      <SidenavHeader />
      <SideNavItems />
    </div>
  );
};
