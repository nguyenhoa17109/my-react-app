
export default function Header() {
  const navLinkList = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Order",
      url: "/order",
    },
    {
      name: "Menu",
      url: "/menu",
    },
    {
      name: "Booking Page",
      url: "/booking",
    },
  ]
  return (
    <>
      <header className="App-header">
        <div className='header container'>
          <img src="./images/Logo.svg" className="App-logo" alt="logo" />
          <nav>
            <ul className='navbar'>
              {
                navLinkList.map(item => {
                  return (
                    <li>
                      <a href={item.url} color="black">{item.name}</a>
                    </li>
                  )
                })
              }
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
