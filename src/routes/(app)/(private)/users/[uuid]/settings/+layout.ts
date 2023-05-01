import type { Load } from "@sveltejs/kit";

export const load: Load = async ({ params, url }) => {

  const pathnames = url.pathname.split('/')
  const activePage = pathnames[pathnames.length - 1]

  return {
    uuid: params.uuid,
    activePage
  }
};