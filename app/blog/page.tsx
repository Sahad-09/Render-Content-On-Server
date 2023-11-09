import { allDocs } from "contentlayer/generated"
import { notFound } from "next/navigation"
import { Mdx } from "./[slug]/Mdx"


async function getDocFromParams(slug: string){
    const doc = allDocs.find((doc) => doc.slugAsParams === slug)

    if (!doc) notFound()

    return doc
}


const page = () => {

  return (
    <div>
         {allDocs.map((value, index) => (
        <div key={index}>{value.title}</div>
      ))}
    </div>
  )
}

export default page
