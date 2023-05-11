import Link from "next/link";
let NavPc = () => {
    return (
        <>
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <Link href={"/"} className="btn btn-ghost normal-case text-xl col-red-500">Ujjawal Hub</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link href={"/richtext"} >RichText</Link></li>
      <li tabIndex={0}>
        <a>
          apps
          {/* <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg> */}
        </a>
        <ul className="p-2 bg-base-100">
          <li><Link href={"/bitcoin"}>bitcoin</Link></li>
          <li><Link href={"/loginpage"}>loginpage</Link></li>
        </ul>
      </li>
      <li><Link href={'/'}>Item 3</Link></li>
    </ul>
  </div>
</div>
        </>
    );
}
export default NavPc;