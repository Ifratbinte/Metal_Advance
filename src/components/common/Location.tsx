import location, { LocationInterface } from "#mocks/location";
function Location() {
  return (
    <>
      <div className="location">
        {location.map((item: LocationInterface, i: number) => {
          return (
            <div key={i} className="d-flex align-middle">
              <span className="list-icon">{item.Icon ? <item.Icon className="icon me-2" /> : null}</span>
              <span className="list-content">{item.location}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Location;
