import Link from "next/link";

export default function Home() {
  let name = 'yeo';

  return (
    <div>
      <h4 className="title">로켓프레시</h4>
      <p className="title-sub">by dev { name }</p>
    </div>
  )
}