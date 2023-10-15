import Link from "next/link"
const ViewAll=()=>{

    return(
        <>
        <Link href="/trips">
        <button className="border-solid border-2 border-black rounded-full px-5 py-3">
            View All
        </button>
        </Link>
        </>
    )

}

export default ViewAll