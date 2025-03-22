function Headbar() {
  return (
    <>
      <div className="h-20 items-center flex justify-center bg-white ">
        <img src="src/assets/logo.png" alt="logo" />
        <div className="ml-5">
          <input
            type="text"
            className="border rounded w-80 h-10"
            placeholder="Search"
          />
        </div>
        <div className="flex ml-5 space-x-5 cursor-pointer ">
          <div>Home</div>
          <div>About</div>
          <div>Contact us</div>
          <div>Blog</div>
        </div>
      </div>
    </>
  );
}

export default Headbar;
