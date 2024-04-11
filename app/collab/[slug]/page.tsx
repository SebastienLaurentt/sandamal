import { simplifiedCollab } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import Section from "@/components/Section/Section";

async function getData(slug: string) {
  const query = `*[_type == "collab" && slug.current == "${slug}"][0] {
        _id,
          images,
          name,
          "slug": slug.current,
      }`;

  const data = await client.fetch(query);

  return data;
}

export const dynamic = "force-dynamic";

export default async function CollabPage({
  params,
}: {
  params: { slug: string };
}) {
  const data: simplifiedCollab = await getData(params.slug);
  return (
    <Section>
      <h2 className="">{data.name}</h2>
    </Section>
  );
}