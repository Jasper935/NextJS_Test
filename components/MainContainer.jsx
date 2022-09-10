 import A from "./A"
 
 const MainContainer= ({children}) => {
  return (<>
  {/* <Head>
      <meta keywords ='nextjs + keywords' ></meta >
      <title>Users</title>
    </Head> */}
<div className="navbar">
        
      
        
        <A key={1}  href='/' text={"Home page"} />
        <A key={2}  href='/users' text={"Users"} />
        <A key={3}  href='/contacts' text={"Contacts"} />
      </div>
      <div>
        {children}
        
      </div>
      <style jsx>{`
        
        .navbar {
          background: orange;
          border: 1px solid black;
          padding: 10px 15px;
        }
      `}</style>
  </>)
}
export default MainContainer