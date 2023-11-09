import { allDocs } from "contentlayer/generated"
import { notFound } from "next/navigation"
import { Mdx } from "./Mdx"



interface PageProps {
  params: {
    slug: string
  }
}

allDocs.map((value)=>{
  console.log(value.title)
})


async function getDocFromParams(slug: string){
    const doc = allDocs.find((doc) => doc.slugAsParams === slug)

    if (!doc) notFound()

    return doc
}

const page = async ({params} : PageProps)=>{
    const doc = await getDocFromParams(params.slug)

    return <div><Mdx code={doc.body.code} /></div>
}

export default page