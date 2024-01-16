import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import { BuilderContent } from "@builder.io/sdk";
import { GetStaticProps } from "next";
import DefaultErrorPage from "next/error";
import Head from "next/head";

import "@/builder-registry";
import { supabase } from "@/utils/supabaseClient";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

const Page = ({ page, products }: { page: BuilderContent | null; products: { id: number }[] }) => {
  const isPreviewing = useIsPreviewing();

  if (!page && !isPreviewing) {
    return <DefaultErrorPage statusCode={404} />;
  }

  return (
    <>
      <Head>
        <title>{page?.data?.title}</title>
      </Head>

      <BuilderComponent model="page" content={page || undefined} data={{ products }} />
    </>
  );
};

// SSR
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = await builder
    .get("page", {
      userAttributes: {
        urlPath: "/" + ((params?.page as string[])?.join("/") || ""),
      },
    })
    .toPromise();

  const { data: products } = await supabase.from("product").select("*");

  return {
    props: {
      page: page || null,
      products,
    },
    revalidate: 5,
  };
};

export const getStaticPaths = async () => {
  const pages = await builder.getAll("page", {
    fields: "data.url",
    options: { noTargeting: true },
  });

  return {
    paths: pages.map((page) => "/pages" + String(page.data?.url)).filter((url) => url !== "/"),
    fallback: "blocking",
  };
};

export default Page;
