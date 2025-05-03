import React from "react";
import AcceptForm from "@/components/AcceptForm";
import { API_URL, site } from "@/config";

async function Verify({ params }) {
  const { adminId, posterId, verifyId } = params;
  const isMobileView = userAgent.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  );

  const isTabletView = userAgent.match(
    /Tablet|iPad|Playbook|Silk|Kindle|(Android(?!.*Mobile))/i
  );

  const device = isMobileView ? "phone" : isTabletView ? "ipad" : "desktop";

  const url = `${API_URL}/${site}/${adminId}/${posterId}/${verifyId}/${device}`;

  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  if (data?.success !== "exists") {
    content = <div className="col-span-12">No Page found!!</div>;
  }
  if (data?.success == "exists") {
    // content= <div className="col-span-12">Page found!!</div>

    content = <AcceptForm sitename={data?.sitename} />;
  }
  return <div>{content}</div>;
}

export default Verify;
