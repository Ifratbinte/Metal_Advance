const SubHeader = () => {
  // add state
  // path name on useEffect
  // function -> match with pathname -> title

  const pathname = window.location.pathname;
  return (
    <div className="section sub-header">
      <div className="container">
        <div className="sub-header-inner text-center">
          <h2 className="sub-header-title font-poppins fs-45 fw-bold">About Benemoy Securities</h2>
          <h6 className="font-poppins fs-20 fw-normal">Home - {pathname}</h6>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
