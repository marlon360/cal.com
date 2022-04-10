import { NextPageContext } from "next";

import { getSession } from "@lib/auth";

function RedirectPage() {
  return;
}

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  if (!session?.user?.id) {
    // redirect to user page
    return { redirect: { permanent: false, destination: "/new" } };
  }

  return { redirect: { permanent: false, destination: "/event-types" } };
}

export default RedirectPage;
